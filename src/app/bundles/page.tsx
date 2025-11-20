// app/bundles/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const bundlesProducts = [
  {
    id: 1,
    name: "Dove Men+Care Restore Clean Comfort Duo XL Gift Set",
    description: "XL gift set with restore clean comfort products for men",
    price: 120.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/71iChfPUpLL._UF8941000_QL80_-250x250.jpg",
    category: "Men's Grooming",
    outOfStock: false
  },
  {
    id: 2,
    name: "Dove Men+Care Extra Fresh Lions XL Duo Gift Set",
    description: "XL duo gift set with extra fresh products for men",
    price: 120.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/1964748000_517-250x250.jpeg",
    category: "Men's Grooming",
    outOfStock: false
  },
  {
    id: 3,
    name: "Freeman Love to Mask 14 - Pc Facial Kit",
    description: "14-piece facial mask kit for complete skincare routine",
    price: 240.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/xwqkzlws9aqmolyqacnx.jpg-250x250.webp",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 4,
    name: "Nuxe 'My Travel Essentials Kit' (4 Ct)",
    description: "Travel essentials kit with 4 premium products",
    price: 450.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/05/IMG_5598-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 5,
    name: "Fenty Hair Maintenance Crew Universal Starter Kit",
    description: "Universal starter kit for hair maintenance",
    price: 890.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/04/IMG_4175-250x250.jpeg",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 6,
    name: "Face Facts Enchanting Radiance Set",
    description: "Skincare set for enchanting radiance and glow",
    price: 210.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7930-250x250.webp",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 7,
    name: "Headshock Plex System Gift Set",
    description: "Complete hair plex system gift set",
    price: 250.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7927-250x250.jpeg",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 8,
    name: "Face Facts Nourish & Defend Gift Set",
    description: "Gift set for nourishing and defending skin",
    price: 220.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7931-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 9,
    name: "Face Facts Perfect Prep Radiant Ritual Set",
    description: "Radiant ritual set for perfect skin preparation",
    price: 250.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7888-250x250.webp",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 10,
    name: "Face Facts Luminescent Luxe Glow Set",
    description: "Luxe glow set for luminescent skin",
    price: 100.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_7887-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: 11,
    name: "Nature Spell Bond Repair Haircare Collection",
    description: "Complete bond repair haircare collection",
    price: 395.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/10/IMG_5256-250x250.webp",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: 12,
    name: "Urban Skin Rx Fade + Clarify Acne And Dark Spot Essentials Kit",
    description: "Essentials kit for acne and dark spot treatment",
    price: 490.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/09/IMG_3671-250x250.webp",
    category: "Skincare",
    outOfStock: false
  }
];

export default function BundlesPage() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter and sort products
  const filteredProducts = bundlesProducts
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
  const categories = ["all", ...Array.from(new Set(bundlesProducts.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bundles</h1>
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {bundlesProducts.length} results
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
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}