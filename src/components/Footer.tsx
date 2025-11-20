// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// OpenWeatherMap API Configuration - Use your actual API key
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
  city: string;
  country: string;
}

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
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

  // Current time updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get user's current location
  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        setWeather(prev => ({
          ...prev,
          loading: false,
          error: "Geolocation not supported"
        }));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            // Reverse geocoding to get city name from coordinates
            const geoResponse = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`
            );
            
            if (geoResponse.ok) {
              const geoData = await geoResponse.json();
              if (geoData.length > 0) {
                setUserLocation({
                  latitude,
                  longitude,
                  city: geoData[0].name,
                  country: geoData[0].country
                });
              } else {
                // Fallback to coordinates if city not found
                setUserLocation({
                  latitude,
                  longitude,
                  city: "Your Location",
                  country: ""
                });
              }
            }
          } catch (error) {
            console.error('Error getting location name:', error);
            setUserLocation({
              latitude,
              longitude,
              city: "Your Location", 
              country: ""
            });
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to Karachi if location access denied
          setUserLocation({
            latitude: 24.8607,
            longitude: 67.0011,
            city: "Karachi",
            country: "PK"
          });
        }
      );
    };

    getUserLocation();
  }, []);

  // Weather data fetcher based on user location
  useEffect(() => {
    const fetchWeather = async () => {
      if (!userLocation) return;

      try {
        setWeather(prev => ({ ...prev, loading: true, error: null }));
        
        let weatherUrl: string;
        
        if (userLocation.city === "Your Location") {
          // Use coordinates if city name not available
          weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${WEATHER_API_KEY}&units=metric`;
        } else {
          // Use city name for better accuracy
          weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.city},${userLocation.country}&appid=${WEATHER_API_KEY}&units=metric`;
        }
        
        const response = await fetch(weatherUrl);
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        
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
        console.error('Error fetching weather:', error);
        setWeather(prev => ({
          ...prev,
          loading: false,
          error: 'Unable to fetch weather data'
        }));
      }
    };

    if (userLocation) {
      fetchWeather();
    }
  }, [userLocation]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GH', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getWeatherIcon = (iconCode: string) => {
    const iconMap: { [key: string]: string } = {
      '01d': '☀️', // clear sky day
      '01n': '🌙', // clear sky night
      '02d': '⛅', // few clouds day
      '02n': '☁️', // few clouds night
      '03d': '☁️', // scattered clouds
      '03n': '☁️',
      '04d': '☁️', // broken clouds
      '04n': '☁️',
      '09d': '🌧️', // shower rain
      '09n': '🌧️',
      '10d': '🌦️', // rain day
      '10n': '🌧️', // rain night
      '11d': '⛈️', // thunderstorm
      '11n': '⛈️',
      '13d': '❄️', // snow
      '13n': '❄️',
      '50d': '🌫️', // mist
      '50n': '🌫️'
    };
    
    return iconMap[iconCode] || '🌡️';
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search logic here
      console.log("Searching for:", searchQuery);
      // You can redirect to search page: router.push(`/search?q=${searchQuery}`);
    }
  };

  const refreshWeather = () => {
    if (userLocation) {
      setWeather(prev => ({ ...prev, loading: true, error: null }));
      // Trigger re-fetch by updating a dummy state
      setUserLocation(prev => prev ? { ...prev } : null);
    }
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
        {/* Top Section - About */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Introduction */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">We're Your Beauty Destination!</h3>
            <p className="text-gray-300 leading-relaxed">
              Ghana's premier all in one shopping destination for all things beauty.
            </p>
          </div>

          {/* Our Vision */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Our Vision</h4>
            <p className="text-gray-300 leading-relaxed">
              To be your go to store for a plethora of products sourced ethically from the manufacturers 
              or authorized / trusted distributors / resellers. We want our customers to think beauty, 
              think of us.
            </p>
          </div>

          {/* Our Mission */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Our Mission</h4>
            <p className="text-gray-300 leading-relaxed">
              From day one, our mission has been clear, to put self care within easy reach of our 
              valued customers with reasonable price points.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-pink-400 text-center">Our Values</h4>
          <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto">
            Working with our vision and mission in mind, we always channel our top priorities 
            whilst constantly working to improve:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h5 className="font-semibold text-lg mb-2">Customer Satisfaction</h5>
              <p className="text-gray-300 text-sm">Putting our customers first in everything we do</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h5 className="font-semibold text-lg mb-2">Product Education</h5>
              <p className="text-gray-300 text-sm">Educating customers about our products</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h5 className="font-semibold text-lg mb-2">Promptness</h5>
              <p className="text-gray-300 text-sm">Quick and efficient service delivery</p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h4 className="text-2xl font-bold mb-6 text-center text-pink-400">About Us</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Identity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💄</span>
              </div>
              <h5 className="font-semibold text-lg mb-2">Beauty Experts</h5>
              <p className="text-gray-300 text-sm">Your trusted beauty partner</p>
            </div>

            {/* Search Box */}
            <div className="lg:col-span-2">
              <h5 className="font-semibold text-lg mb-4 text-center">Find Your Products</h5>
              <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type here to search products..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h5 className="font-semibold text-lg mb-4">Contact Info</h5>
              <div className="text-gray-300 space-y-2 text-sm">
                <div>📧 support@beautystore.com</div>
                <div>📞 +123456789</div>
                <div className="pt-4 text-xs">
                  <div>📍 Pakistan, karachi</div>
                  <div>⏰ Mon-Fri: 9AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold">🌡️ Current Weather</div>
                  <button 
                    onClick={refreshWeather}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                    title="Refresh weather"
                  >
                    🔄
                  </button>
                </div>
                {weather.loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span className="text-sm">Detecting location...</span>
                  </div>
                ) : weather.error ? (
                  <div className="text-sm text-gray-400">
                    {weather.error === "Geolocation not supported" 
                      ? "Location not supported" 
                      : "Weather unavailable"
                    }
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getWeatherIcon(weather.icon)}</span>
                      <span>{weather.temperature}°C - {capitalizeFirstLetter(weather.description)}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      📍 {weather.city}{weather.country && `, ${weather.country}`}
                    </div>
                  </>
                )}
              </div>
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
              <p>&copy; {currentTime.getFullYear()} Beauty Store. All rights reserved.</p>
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