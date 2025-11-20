// app/health-wellness/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const healthWellnessProducts = [
  {
    id: 1,
    name: "Traditional Medicinals Organic Lemon Balm Tea", // title ki jagah name use karein
    description: "Organic Lemon Balm Tea for relaxation and stress relief",
    price: 160.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/11/P104456-00_Lemon-Balm_3D_Front_Facing_960x960.jpg-250x250.webp",
    category: "Tea",
    outOfStock: false
  },
  {
    id: 2,
    name: "Traditional Medicinals Organic Green Tea Lemongrass",
    description: "Organic Green Tea with Lemongrass flavor",
    price: 160.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/11/codun1rmcsrg2et5zpy9_960x960.jpg-2-250x250.webp",
    category: "Tea",
    outOfStock: false
  },
  // ... baki products bhi name property ke saath
];

export default function HealthWellnessPage() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter and sort products
  const filteredProducts = healthWellnessProducts
    .filter(product => 
      filterCategory === "all" || product.category === filterCategory
    )
    .sort((a, b) => {
      if (sortBy === "latest") return b.id - a.id;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  // ✅ FIXED: Set iteration issue resolved
  const categories = ["all", ...Array.from(new Set(healthWellnessProducts.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness</h1>
        <p className="text-gray-600">Showing {filteredProducts.length} of {healthWellnessProducts.length} results</p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <span className="text-gray-700">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-700">Filter by:</span>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border rounded px-3 py-2"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found for the selected filters.</p>
        </div>
      )}
    </div>
  );
}