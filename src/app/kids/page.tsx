// app/kids/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const kidsProducts = [
  {
    id: 1,
    name: "EBIN Braid Formula Anti-Tension Gel (Minty) - Super Hold, 180ml",
    description: "Anti-tension gel for braids with minty freshness and super hold",
    price: 150.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/71EZzY2YeZL-250x250.jpg",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 2,
    name: "Annie DayDream Detangling Round Paddle Brush",
    description: "Gentle detangling brush for kids' delicate hair",
    price: 60.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/AnnieKidsDetanglingbrushesdaydreamfront.webp.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 3,
    name: "Sunny Isle Kids Care Moisture-Rich Leave-In Detangler, 8oz",
    description: "Leave-in detangler for kids' hair with rich moisture",
    price: 140.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Sunny-Isle-Kids-Care-Moisture-Rich-Detangler-8oz-FRONT-1800-x-1800.jpg-250x250.webp",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 4,
    name: "Sunny Isle Kids Care Extreme Hydrating Conditioner, 12oz",
    description: "Extreme hydrating conditioner for kids' hair",
    price: 140.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Sunny-Isle-Kids-Care-Extreme-Hydrating-Conditioner-12oz-FRONT-1800-x-1800.jpg-250x250.webp",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 5,
    name: "Sunny Isle Kids Care Extreme Hydrating Shampoo, 12oz",
    description: "Extreme hydrating shampoo for kids' delicate hair",
    price: 140.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/61w6Lj0e0cL._UF8941000_QL80_-250x250.jpg",
    category: "Hair Care",
    outOfStock: true
  },
  {
    id: 6,
    name: "La Roche-Posay Anthelios UVMune 400 Dermo-Pediatrics Invisible Spray SPF50+, 200ml",
    description: "Invisible sunscreen spray for kids with high SPF protection",
    price: 430.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/05/IMG_5596-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 7,
    name: "La Roche-Posay Anthelios UVMune 400 Dermo-Pediatrics Kids' Sunscreen, 250ml",
    description: "Kids sunscreen with advanced UV protection",
    price: 430.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/05/IMG_5633-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 8,
    name: "Curly Kids Curl Poppin Curling Creme, 8 oz",
    description: "Curling creme for kids with curly hair",
    price: 110.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_8244-250x250.jpeg",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 9,
    name: "Jergens Ultra Healing Dry Skin Moisturizer, 21 oz / 621ml",
    description: "Ultra healing moisturizer for kids' dry skin",
    price: 180.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7939-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 10,
    name: "Jergens Oil-Infused Enriching Shea Butter, 16.8oz / 496ml",
    description: "Oil-infused shea butter moisturizer for kids",
    price: 180.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7940-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 11,
    name: "Jergens Soothing Aloe Refreshing Moisturizer, 21oz / 621ml",
    description: "Soothing aloe moisturizer for kids' sensitive skin",
    price: 180.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7935-250x250.webp",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 12,
    name: "Jergens Oil-Infused Hydrating Coconut Moisturiser, 16.8oz / 496ml",
    description: "Hydrating coconut moisturizer for kids' skin",
    price: 180.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7938-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  }
];

export default function KidsPage() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter and sort products
  const filteredProducts = kidsProducts
    .filter(product => 
      filterCategory === "all" || product.category === filterCategory
    )
    .sort((a, b) => {
      if (sortBy === "latest") return b.id - a.id;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(kidsProducts.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kids</h1>
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {kidsProducts.length} results
          <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded">
            Sorted by {sortBy === "latest" ? "latest" : sortBy === "price-low" ? "price: low to high" : sortBy === "price-high" ? "price: high to low" : "name"}
          </span>
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Filter by:</span>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found for the selected filters.</p>
          <button 
            onClick={() => {
              setFilterCategory("all");
              setSortBy("latest");
            }}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}