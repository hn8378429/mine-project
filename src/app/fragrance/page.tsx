// app/fragrance/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const fragranceProducts = [
  {
    id: 1,
    name: "Lattafa Eclaire Eau De Parfum, 100ml / 3.4oz",
    description: "Premium Eau De Parfum with long-lasting fragrance",
    price: 550.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Eclaire-1.jpg-250x250.webp",
    category: "Perfume",
    outOfStock: true
  },
  {
    id: 2,
    name: "Lattafa The Kingdom 'Women' EDP, 100ml",
    description: "Elegant women's perfume with captivating scent",
    price: 450.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/KIngdom-women.jpg-250x250.webp",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 3,
    name: "Lattafa Yara Candy EDP, 3.4oz / 100ml",
    description: "Sweet and fruity fragrance for women",
    price: 450.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/img_3774.png-250x250.webp",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 4,
    name: "Lattafa Vintage Radio Eau de Parfum, 100ml",
    description: "Vintage inspired perfume with unique scent profile",
    price: 550.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/1-52-250x250.jpg",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 5,
    name: "Lattafa Teriaq Eau de Parfum, 100ml",
    description: "Modern fragrance with oriental notes",
    price: 450.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/lattafa_teriaq_eau_de_parfum_100_ml_1.jpg-250x250.webp",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 6,
    name: "Lattafa Pride Ajwaa Eau de Parfum, 90ml",
    description: "Luxury perfume from Pride collection",
    price: 550.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/1-9.jpg-250x250.webp",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 7,
    name: "Dove Go Fresh Grapefruit & Lemongrass Deodorant",
    description: "Refreshing deodorant with citrus scent",
    price: 60.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/671fae3c-39aa-4629-954e-bff31802f52a.7b15168e45a89a2238004fc4bbc1d4b9.jpeg-250x250.jpg",
    category: "Deodorant",
    outOfStock: false
  },
  {
    id: 8,
    name: "Lattafa Khamrah Eau de Parfum, 100ml",
    description: "Warm and spicy oriental fragrance",
    price: 500.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Lattafa-Perfume-Khamrah-Eau-De-Parfum-Natural-Spray-100ML-3-4-oz_f11a9264-4d83-4867-bb69-59dc50917c97.b713c1db5c355d270f3939867de06f84.jpeg-250x250.webp",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 9,
    name: "Lattafa Khamrah Qahwa Eau de Parfum, 100ml",
    description: "Coffee infused fragrance with warm notes",
    price: 500.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/img_5780-250x250.jpeg",
    category: "Perfume",
    outOfStock: false
  },
  {
    id: 10,
    name: "Tree Hut Pink Hibiscus Fragrance Mist, 177 ml",
    description: "Body mist with floral hibiscus scent",
    price: 180.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/front_6ea6e66d-d31a-47bc-afba-779a633a4776.jpg-250x250.webp",
    category: "Body Mist",
    outOfStock: false
  },
  {
    id: 11,
    name: "Zara Orchid + Wonder Rose EDP / EDT, 90ml x 2 (No Packaging)",
    description: "Twin perfume set without packaging",
    price: 530.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/05/IMG_5626-250x250.jpeg",
    category: "Perfume Set",
    outOfStock: false
  },
  {
    id: 12,
    name: "Zara Orchid + Wonder Rose EDP / EDT, 90ml x 2",
    description: "Complete twin perfume set with packaging",
    price: 550.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/05/IMG_5626-250x250.jpeg ",
    category: "Perfume Set",
    outOfStock: false
  }
];

export default function FragrancePage() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter and sort products
  const filteredProducts = fragranceProducts
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
  const categories = ["all", ...Array.from(new Set(fragranceProducts.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fragrance</h1>
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {fragranceProducts.length} results
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
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
            className="mt-4 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}