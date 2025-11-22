"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// OpenWeatherMap API Configuration
const WEATHER_API_KEY = "799516eb838144f36c9cd7c6e8017e80";

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  city: string;
  country: string;
  loading: boolean;
  error: string | null;
}

interface LocationData {
  latitude: number;
  longitude: number;
}

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherSearchQuery, setWeatherSearchQuery] = useState("");
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    description: '',
    icon: '',
    city: '',
    country: '',
    loading: true,
    error: null
  });
  const [userLocation, setUserLocation] = useState<LocationData | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Current time updater - CLIENT SIDE ONLY
  useEffect(() => {
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch weather function - IMPROVED
  const fetchWeather = async (city?: string) => {
    try {
      setWeather(prev => ({ ...prev, loading: true, error: null }));
      
      let weatherUrl: string;
      
      console.log('🌍 Fetching weather for:', { city, userLocation, locationError });
      
      if (city) {
        // Use searched city
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
        console.log('🎯 Using searched city:', city);
      } else if (userLocation) {
        // Use current location coordinates
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${WEATHER_API_KEY}&units=metric`;
        console.log('📍 Using GPS coordinates:', userLocation.latitude, userLocation.longitude);
      } else {
        // Default to Islamabad
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${WEATHER_API_KEY}&units=metric`;
        console.log('🏠 Using default Islamabad');
      }
      
      console.log('🌐 API URL:', weatherUrl);
      
      const response = await fetch(weatherUrl);
      console.log('📡 Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ Weather data received:', {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp
      });
      
      setWeather({
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        city: data.name,
        country: data.sys.country,
        loading: false,
        error: null
      });

    } catch (error) {
      console.error('❌ Error fetching weather:', error);
      
      // Fallback to Islamabad
      try {
        console.log('🔄 Trying fallback to Islamabad...');
        const fallbackResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=${WEATHER_API_KEY}&units=metric`
        );
        
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          setWeather({
            temperature: Math.round(fallbackData.main.temp),
            description: fallbackData.weather[0].description,
            icon: fallbackData.weather[0].icon,
            city: fallbackData.name,
            country: fallbackData.sys.country,
            loading: false,
            error: null
          });
        } else {
          throw new Error('Fallback also failed');
        }
      } catch (fallbackError) {
        console.error('❌ Fallback failed:', fallbackError);
        setWeather(prev => ({
          ...prev,
          loading: false,
          error: 'Weather service unavailable'
        }));
      }
    }
  };

  // Get user's current location - IMPROVED VERSION
  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        console.log('❌ Geolocation not supported by browser');
        setLocationError('Geolocation not supported');
        return;
      }

      console.log('📍 Requesting location permission...');
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('✅ Location granted:', latitude, longitude);
          
          setUserLocation({
            latitude,
            longitude
          });
          setLocationError(null);
        },
        (error) => {
          console.error('❌ Location error:', error);
          let errorMessage = 'Location access denied';
          
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location permission denied. Using Islamabad weather.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out.';
              break;
            default:
              errorMessage = 'Unknown location error.';
              break;
          }
          
          setLocationError(errorMessage);
          console.log('📍 Using Islamabad as fallback');
        },
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 60000
        }
      );
    };

    // Small delay to ensure component is mounted
    setTimeout(() => {
      getUserLocation();
    }, 1000);
  }, []);

  // Fetch weather when userLocation changes
  useEffect(() => {
    if (userLocation || locationError) {
      console.log('🔄 Location state changed, fetching weather...');
      fetchWeather();
    }
  }, [userLocation, locationError]);

  const formatTime = (date: Date | null) => {
    if (!date) return "--:--";
    return date.toLocaleTimeString('en-GH', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "Loading...";
    return date.toLocaleDateString('en-GH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getWeatherIcon = (iconCode: string) => {
    const iconMap: { [key: string]: string } = {
      '01d': '☀️', '01n': '🌙', '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️', '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️', '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️', '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️'
    };
    
    return iconMap[iconCode] || '🌡️';
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Product search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for products:", searchQuery);
    }
  };

  // Weather search handler
  const handleWeatherSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (weatherSearchQuery.trim()) {
      console.log('🔍 Weather search:', weatherSearchQuery);
      fetchWeather(weatherSearchQuery.trim());
    }
  };

  const refreshWeather = () => {
    console.log('🔄 Refreshing weather...');
    setWeather(prev => ({ ...prev, loading: true, error: null }));
    
    // Reset location and try again
    setUserLocation(null);
    setLocationError(null);
    
    const getUserLocation = () => {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('✅ New location:', latitude, longitude);
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.log('📍 Still no location, using Islamabad');
          fetchWeather(); // Force fetch with default
        }
      );
    };

    getUserLocation();
  };

  const footerLinks = {
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Delivery Information", href: "/delivery" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Free Consultation", href: "/consultation" },
      { name: "Gift Cards", href: "/gift-cards" },
      { name: "Special Orders", href: "/special-orders" },
      { name: "Payment Methods", href: "/payment-methods" }
    ],
    "Legal": [
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Return Policy", href: "/return-policy" },
      { name: "Shipping Policy", href: "/shipping-policy" }
    ]
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/profile.php?id=100070708733176", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/hasan4597481/", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.765 3.73 13.614 3.73 12.317s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-8.539c-.327 0-.592-.265-.592-.592s.265-.592.592-.592.592.265.592.592-.265.592-.592.592zm1.815 8.539c-1.297 0-2.448-.49-3.323-1.297-.906-.875-1.396-2.026-1.396-3.323s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      url: "https://x.com/HassanN30016711", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      url: "https://www.youtube.com/@hasanfrontendx", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ... (rest of your footer JSX remains exactly the same) ... */}
        
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-pink-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:pl-2 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Additional Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-pink-400">Store Info</h4>
            <div className="text-gray-300 space-y-3">
              {/* Weather Section with Search */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-semibold">🌡️ Current Weather</div>
                  <button 
                    onClick={refreshWeather}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                    title="Refresh to current location"
                  >
                    🔄
                  </button>
                </div>
                
                {/* Location Status */}
                {locationError && (
                  <div className="text-xs text-yellow-400 mb-2">
                    ⚠️ {locationError}
                  </div>
                )}
                {userLocation && (
                  <div className="text-xs text-green-400 mb-2">
                    ✅ Using your location
                  </div>
                )}
                
                {/* Weather Search */}
                <form onSubmit={handleWeatherSearch} className="relative mb-3">
                  <input
                    type="text"
                    value={weatherSearchQuery}
                    onChange={(e) => setWeatherSearchQuery(e.target.value)}
                    placeholder="Search weather by city..."
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500 border border-gray-600"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-1 rounded text-xs hover:bg-pink-600 transition-colors"
                    title="Search weather"
                  >
                    🔍
                  </button>
                </form>

                {/* Weather Display */}
                {weather.loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span className="text-sm">Loading weather...</span>
                  </div>
                ) : weather.error ? (
                  <div className="text-sm text-gray-400">
                    {weather.error}
                    <br />
                    <button 
                      onClick={refreshWeather}
                      className="text-pink-400 hover:text-pink-300 text-xs mt-1"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getWeatherIcon(weather.icon)}</span>
                      <span>{weather.temperature}°C - {capitalizeFirstLetter(weather.description)}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1 flex justify-between items-center">
                      <span>📍 {weather.city}{weather.country && `, ${weather.country}`}</span>
                      <button 
                        onClick={() => setWeatherSearchQuery(weather.city)}
                        className="text-pink-400 hover:text-pink-300 text-xs"
                        title="Search this city again"
                      >
                        📌
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Local Time */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="font-semibold">🕒 Local Time</div>
                <div>{formatTime(currentTime)}</div>
                <div className="text-sm">{formatDate(currentTime)}</div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-pink-400">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-pink-500 transition-colors duration-200 flex items-center justify-center w-12 h-12"
                  title={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 text-gray-300 text-sm">
              <p>Stay updated with our latest products and offers</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentTime ? currentTime.getFullYear() : '2024'} Beauty Store. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇬🇭 Proudly Ghanaian</span>
              <span>💖 Made with love</span>
              <span>🚀 Powered by Innovation</span>
            </div>

            <div className="text-gray-400 text-sm">
              <p>Premium Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
