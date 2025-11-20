// app/men/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const menProducts = [
  {
    id: 1,
    name: "Just For Men Shampoo-In Color, Real Black",
    description: "Shampoo-in hair color for men in real black shade",
    price: 160.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/40.jpg-250x250.jpg",
    category: "Hair Color",
    outOfStock: false
  },
  {
    id: 2,
    name: "Just For Men Shampoo-In Color, Jet Black",
    description: "Shampoo-in hair color for men in jet black shade",
    price: 160.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/Just-For-Men-Shampoo-in-Hair-Dye-for-Men-H-60-Jet-Black-3-Pack_dff5fb7a-2596-4c51-ade7-1378296828e7.710a23bc428fe0c634cc2cf268bd17af.jpeg-250x250.webp",
    category: "Hair Color",
    outOfStock: false
  },
  {
    id: 3,
    name: "Just For Men Mustache & Beard Dye, Real Black",
    description: "Mustache and beard dye in real black color",
    price: 200.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/Just-For-Men-Mustache-Beard-Coloring-for-Gray-Hair-M55-Real-Black_c63418b0-194c-4da6-bfef-703fbea1b8c2.e5ae206acd1d69f4b1ca5572fade8b71.jpeg-250x250.webp",
    category: "Beard Care",
    outOfStock: false
  },
  {
    id: 4,
    name: "Gillette ClearShield Cool Wave Clear Gel Men's Antiperspirant / Deodorant, 3.8 oz.",
    description: "Clear gel antiperspirant and deodorant for men with cool wave scent",
    price: 85.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/672bdf538516d60f507d16e9-gillette-anti-perspirant-deodorant-clear-250x250.jpg",
    category: "Personal Care",
    outOfStock: false
  },
  {
    id: 5,
    name: "PrimeX Premium Horsehair Wooden Soft Beard Brush",
    description: "Premium wooden beard brush with soft horsehair bristles",
    price: 70.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/annie-2871-1-250x250.jpg",
    category: "Beard Care",
    outOfStock: false
  },
  {
    id: 6,
    name: "PrimeX Twist & Pik Comb",
    description: "Versatile twist and pik comb for styling",
    price: 120.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/PrimexTwistandPikCombMain.webp-250x250.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 7,
    name: "Annie Supreme Wave Brush Medium Boar Bristles, Long Handle",
    description: "Wave brush with medium boar bristles and long handle",
    price: 90.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/suprememediumwoodenbrushbig.webp-250x250.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 8,
    name: "Annie Supreme Club Brush Medium Boar Bristles, Short Handle",
    description: "Club brush with medium boar bristles and short handle",
    price: 90.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/suprememediumwoodenbrushmiddle.webp-250x250.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 9,
    name: "Annie Supreme Club Brush Hard Boar Bristles, Short Handle",
    description: "Club brush with hard boar bristles and short handle",
    price: 90.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/SupremeBrush_grande.png-250x250.webp",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 10,
    name: "Annie Supreme Military Brush Hard Boar Bristles",
    description: "Military brush with hard boar bristles for precise styling",
    price: 90.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/supremehardwoodenbrushsmall.webp-250x250.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 11,
    name: "Annie Luminous Fist Afro Pik - Asst. Colour",
    description: "Luminous fist afro pik in assorted colors",
    price: 40.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/00256Rainbow_a061abd3-4d7c-4297-ba23-3c331339bfdc.png-250x250.webp",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 12,
    name: "Annie Luminous Fist Styling Pik Asst Color",
    description: "Luminous fist styling pik in assorted colors",
    price: 40.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/annie-luminous-fist-styling-pik-asst-colorcombannieannie-international-31737532.png-250x250.webp",
    category: "Hair Accessories",
    outOfStock: false
  }
];

export default function MenPage() {
  const [sortBy, setSortBy] = useState("latest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Filter and sort products
  const filteredProducts = menProducts
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
  const categories = ["all", ...Array.from(new Set(menProducts.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Men</h1>
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {menProducts.length} results
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