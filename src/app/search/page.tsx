// src/app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

// Complete products database
const allProducts = [
  // Makeup
  { id: 1, name: "Matte Lipstick", category: "Makeup", price: 12.99, image: "/api/placeholder/300/300" },
  { id: 2, name: "Hydrating Foundation", category: "Makeup", price: 24.99, image: "/api/placeholder/300/300" },
  { id: 3, name: "Liquid Eyeliner", category: "Makeup", price: 8.99, image: "/api/placeholder/300/300" },
  { id: 4, name: "Blush Palette", category: "Makeup", price: 18.99, image: "/api/placeholder/300/300" },
  
  // Skincare
  { id: 5, name: "Vitamin C Serum", category: "Skincare", price: 29.99, image: "/api/placeholder/300/300" },
  { id: 6, name: "Hyaluronic Acid Moisturizer", category: "Skincare", price: 22.99, image: "/api/placeholder/300/300" },
  { id: 7, name: "Sunscreen SPF 50", category: "Skincare", price: 15.99, image: "/api/placeholder/300/300" },
  { id: 8, name: "Face Cleanser", category: "Skincare", price: 12.99, image: "/api/placeholder/300/300" },
  
  // Hair Care
  { id: 9, name: "Argan Hair Oil", category: "Hair Care", price: 18.99, image: "/api/placeholder/300/300" },
  { id: 10, name: "Keratin Shampoo", category: "Hair Care", price: 14.99, image: "/api/placeholder/300/300" },
  { id: 11, name: "Hair Growth Serum", category: "Hair Care", price: 25.99, image: "/api/placeholder/300/300" },
  
  // Men's Grooming
  { id: 12, name: "PrimeX Premium Horsehair Wooden Soft Beard Brush", category: "Men's Grooming", price: 15.99, image: "/api/placeholder/300/300" },
  { id: 13, name: "Beard Growth Oil", category: "Men's Grooming", price: 22.99, image: "/api/placeholder/300/300" },
  { id: 14, name: "Wooden Beard Comb", category: "Men's Grooming", price: 8.99, image: "/api/placeholder/300/300" },
  { id: 15, name: "Beard Shampoo", category: "Men's Grooming", price: 12.99, image: "/api/placeholder/300/300" },
  
  // Fragrance
  { id: 16, name: "Eau de Parfum", category: "Fragrance", price: 45.99, image: "/api/placeholder/300/300" },
  { id: 17, name: "Body Mist", category: "Fragrance", price: 12.99, image: "/api/placeholder/300/300" },
];

// Popular search suggestions
const popularSearches = [
  "Lipstick", "Foundation", "Serum", "Beard Oil", "Perfume", "Shampoo", "Moisturizer"
];

const categories = [
  { name: "Makeup", count: 4, icon: "💄" },
  { name: "Skincare", count: 4, icon: "✨" },
  { name: "Hair Care", count: 3, icon: "💇" },
  { name: "Men's Grooming", count: 4, icon: "🧔" },
  { name: "Fragrance", count: 2, icon: "🌸" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<typeof allProducts>([]);
  const [loading, setLoading] = useState(true);
  const [suggestedSearches, setSuggestedSearches] = useState<string[]>([]);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = allProducts.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        
        // Generate suggested searches based on query
        const suggestions = popularSearches.filter(item =>
          item.toLowerCase().includes(query.toLowerCase().split(' ')[0]) &&
          !filtered.some(p => p.name === item)
        ).slice(0, 3);
        
        setSuggestedSearches(suggestions);
        setLoading(false);
      }, 500);
    } else {
      setResults([]);
      setSuggestedSearches([]);
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg shadow p-4">
                  <div className="h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for &quot;{query}&quot;
          </h1>
          <p className="text-gray-600">
            {results.length > 0 
              ? `Found ${results.length} product${results.length > 1 ? 's' : ''}`
              : 'No exact matches found'
            }
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {results.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">{product.category === 'Makeup' ? '💄' : 
                    product.category === 'Skincare' ? '✨' : 
                    product.category === 'Hair Care' ? '💇' : 
                    product.category === "Men's Grooming" ? '🧔' : '🌸'}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                    <span className="text-pink-600 font-bold">${product.price}</span>
                  </div>
                  <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results State
          <div className="text-center py-12 bg-white rounded-lg shadow-sm mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn&apos;t find any products matching &quot;{query}&quot;. Try different keywords or browse our categories.
            </p>

            {/* Suggested Searches */}
            {suggestedSearches.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Try these searches instead:</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {suggestedSearches.map((suggestion, index) => (
                    <Link
                      key={index}
                      href={`/search?q=${encodeURIComponent(suggestion)}`}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-pink-100 hover:text-pink-700 transition-colors"
                    >
                      {suggestion}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Categories */}
            <div className="max-w-2xl mx-auto">
              <h3 className="font-semibold text-gray-900 mb-6">Browse Popular Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map(category => (
                  <Link
                    key={category.name}
                    href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-pink-300 hover:shadow-md transition-all"
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">{category.name}</div>
                    <div className="text-gray-500 text-xs">{category.count} products</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Continue Shopping CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-pulse">Loading search results...</div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}