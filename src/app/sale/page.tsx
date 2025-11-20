// app/sale/page.tsx
"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext"; // ✅ CartContext import karo

const saleProducts = [
  {
    id: 1,
    name: "Wild Growth Complete Hair Growth System",
    description: "Complete hair growth system for thicker, longer hair",
    price: 340.00,
    originalPrice: null,
    discount: null,
    image: "https://urbanmakes.com/wp-content/uploads/2024/11/IMG_7051-250x250.jpeg",
    category: "Hair Care",
    outOfStock: false,
    isOnSale: true
  },
  {
    id: 2,
    name: "Tiam Anti-Blemish Body Lotion, 200ml / 6.76 oz",
    description: "Anti-blemish body lotion for clear, smooth skin",
    price: 190.00,
    originalPrice: 250.00,
    discount: 24,
    image: "https://urbanmakes.com/wp-content/uploads/2024/07/IMG_1529-250x250.jpeg",
    category: "Skincare",
    outOfStock: false,
    isOnSale: true
  },
  {
    id: 3,
    name: "Aunt Jackie's Protein-Moisture Bundle 'NYA x Tress Boost'",
    description: "Protein-moisture bundle for healthy hair growth",
    price: 180.00,
    originalPrice: 200.00,
    discount: 10,
    image: "https://urbanmakes.com/wp-content/uploads/2024/05/IMG_9644-250x250.jpeg",
    category: "Hair Care",
    outOfStock: false,
    isOnSale: true
  },
  {
    id: 4,
    name: "As I Am Curl Color & Gel - Cool Blue, 6 oz.",
    description: "Curl color and gel in cool blue shade",
    price: 120.00,
    originalPrice: 140.00,
    discount: 14,
    image: "https://urbanmakes.com/wp-content/uploads/2023/02/084671CE-7764-42BF-B173-EC09BE8EF2A4-250x250.jpeg",
    category: "Hair Color",
    outOfStock: false,
    isOnSale: true
  },
  {
    id: 5,
    name: "As I Am Curl Color & Gel - Emerald Green, 6 oz.",
    description: "Curl color and gel in emerald green shade",
    price: 120.00,
    originalPrice: 140.00,
    discount: 14,
    image: "https://urbanmakes.com/wp-content/uploads/2023/02/EA5BAC86-4A60-4723-B821-10506D3F0FEB-250x250.webp",
    category: "Hair Color",
    outOfStock: false,
    isOnSale: true
  },
  {
    id: 6,
    name: "As I Am Curl Color & Gel - Passion Purple, 6 oz",
    description: "Curl color and gel in passion purple shade",
    price: 120.00,
    originalPrice: 140.00,
    discount: 14,
    image: "https://urbanmakes.com/wp-content/uploads/2023/02/31193C01-52F6-4D4E-BEF1-4D42C17BF182-250x250.jpeg",
    category: "Hair Color",
    outOfStock: false,
    isOnSale: true
  }
];

export default function SalePage() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter and sort products
  const filteredProducts = saleProducts
    .filter(product => 
      filterCategory === "all" || product.category === filterCategory
    )
    .sort((a, b) => {
      if (sortBy === "latest") return b.id - a.id;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "discount") return (b.discount || 0) - (a.discount || 0);
      return 0;
    });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(saleProducts.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with Sale Banner */}
      <div className="text-center mb-8">
        <div className="bg-red-600 text-white py-3 px-6 rounded-full inline-block mb-4">
          <h1 className="text-4xl font-bold">SALE</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Showing all {filteredProducts.length} results
          <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded">
            Sorted by {sortBy === "latest" ? "latest" : 
                     sortBy === "price-low" ? "price: low to high" : 
                     sortBy === "price-high" ? "price: high to low" :
                     sortBy === "discount" ? "discount" : "name"}
          </span>
        </p>
        <p className="text-red-600 font-semibold mt-2">
          🎉 Limited Time Offers - Don't Miss Out! 🎉
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-red-50 p-4 rounded-lg border border-red-200">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="discount">Discount %</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Filter by:</span>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
          <SaleProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No sale products found for the selected filters.</p>
          <button 
            onClick={() => {
              setFilterCategory("all");
              setSortBy("latest");
            }}
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

// Special Sale Product Card Component
function SaleProductCard({ product }: { product: any }) {
  const { addToCart } = useCart(); // ✅ Now this will work

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="border border-red-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 flex flex-col h-full group relative">
      {/* Sale Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          {product.discount}% OFF!
        </div>
      )}
      {!product.discount && product.isOnSale && (
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          SALE!
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 mb-4 flex-shrink-0 overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Out of Stock Badge */}
        {product.outOfStock && (
          <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">
            Out of stock
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14 overflow-hidden text-gray-800">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-2 text-sm line-clamp-2 h-10 overflow-hidden flex-1">
          {product.description}
        </p>
        
        {/* Price Section */}
        <div className="mb-4">
          {product.originalPrice ? (
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">
                  ₵{product.price.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₵{product.originalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-green-600 text-sm font-semibold">
                You save ₵{(product.originalPrice - product.price).toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-2xl font-bold text-red-600">
              ₵{product.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="mt-auto pt-2">
        <button
          onClick={handleAddToCart}
          disabled={product.outOfStock}
          className={`w-full py-3 rounded font-medium transition-all duration-200 ${
            product.outOfStock 
              ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
              : 'bg-red-600 hover:bg-red-700 text-white shadow hover:shadow-lg'
          }`}
        >
          {product.outOfStock ? 'Out of Stock' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}