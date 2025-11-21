// src/components/Hero.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Sample product data - aap apne actual products se replace kar sakte hain
const sampleProducts = [
  { id: 1, name: "Lipstick", category: "Makeup" },
  { id: 2, name: "Foundation", category: "Makeup" },
  { id: 3, name: "Face Serum", category: "Skincare" },
  { id: 4, name: "Hair Oil", category: "Hair Care" },
  { id: 5, name: "Perfume", category: "Fragrance" },
  { id: 6, name: "Moisturizer", category: "Skincare" },
  { id: 7, name: "Eyeshadow", category: "Makeup" },
  { id: 8, name: "Shampoo", category: "Hair Care" },
];

export default function Hero() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<typeof sampleProducts>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-suggestions
  useEffect(() => {
    if (search.trim()) {
      const filtered = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Top 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  const performSearch = () => {
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setSearch(productName);
    router.push(`/search?q=${encodeURIComponent(productName)}`);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden min-h-80vh flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* BE THE FIRST TO KNOW! - Top (Smaller) */}
        <p className="text-sm md:text-base mb-2 opacity-90 tracking-wide font-medium">
          BE THE FIRST TO KNOW!
        </p>
        
        {/* NEW ARRIVALS - Main Heading (Very Large) */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight leading-none">
          NEW<br />ARRIVALS
        </h1>

        {/* GUMMY GLOT Badge */}
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
          <span className="font-bold text-sm">GUMMY GLOT</span>
          <span className="text-xs ml-1 opacity-80">v.od.tu</span>
        </div>

        {/* Search Bar with Suggestions */}
        <div className="max-w-sm mx-auto mb-6" ref={searchRef}>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Type here to search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => search.trim() && setShowSuggestions(true)}
              className="w-full px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm border-0 pr-12"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
                {suggestions.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSuggestionClick(product.name)}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">{product.name}</span>
                      <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No results message */}
            {showSuggestions && search.trim() && suggestions.length === 0 && (
              <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 z-50 p-4">
                <p className="text-gray-600 text-sm">No products found. Try different keywords.</p>
              </div>
            )}
          </form>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <button 
            onClick={() => router.push('/products')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
          >
            SHOP NOW
          </button>
          <div className="bg-black/20 px-4 py-2 rounded-full">
            <span className="font-semibold text-sm">10h</span>
          </div>
        </div>

        {/* Feature Tags - In a row */}
        <div className="flex justify-center gap-3">
          {["HYDRATE!", "GROW!", "REPAIR!"].map((tag) => (
            <span
              key={tag}
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
    </section>
  );
}
