// src/components/ProductGrid.tsx
"use client";

import ProductCard, { Product } from "./ProductCard";

// Updated products array with new featured products
const products: Product[] = [
  {
    id: "1",
    name: "PrimeX Premium Horsehair Wooden Soft Beard Brush",
    description: "Premium wooden beard brush with soft horsehair bristles for gentle grooming",
    price: 70.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/annie-2871-1-250x250.jpg",
    category: "Men's Grooming",
    outOfStock: false
  },
  {
    id: "2", 
    name: "APLB Tranexamic Acid Niacinamide Body Lotion, 300ml",
    description: "Brightening body lotion with tranexamic acid and niacinamide for even skin tone",
    price: 200.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/08/4797020_17398394586826_big.jpg-250x250.webp",
    category: "Body Care",
    outOfStock: false
  },
  {
    id: "3",
    name: "Clinique Clarifying Lotion 2 Dry-Combination, 400ml",
    description: "Clarifying lotion for dry to combination skin types, exfoliates and refines",
    price: 480.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/11144130-1745231030722635-250x250.jpg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: "4",
    name: "Isntree Hyaluronic Acid Fresh Sun Serum, 50ml",
    description: "Hydrating sun serum with hyaluronic acid for moisturized and protected skin",
    price: 260.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/2131678_20250224112522-250x250.jpg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: "5",
    name: "Topicals Faded Brightening & Clearing Serum, 50ml",
    description: "Brightening serum to fade dark spots and even out skin tone",
    price: 700.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/02/IMG_9652-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: "6",
    name: "Nineless A-Control Heartleaf & BHA Cleanser, 120ml",
    description: "Gentle cleanser with heartleaf and BHA for acne-prone and sensitive skin",
    price: 240.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/11/IMG_6709-250x250.jpeg",
    category: "Skincare",
    outOfStock: false
  },
  {
    id: "7",
    name: "TGIN Honey Miracle Hair Mask Packet, 1.75 oz.",
    description: "Intensive hair mask with honey for deep conditioning and repair",
    price: 50.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/07/IMG_1339-250x250.jpeg",
    category: "Hair Care",
    outOfStock: false
  },
  {
    id: "8",
    name: "Simple Skin Kind Booster Serum Gift Set",
    description: "Complete serum gift set for sensitive skin with gentle, effective formulas",
    price: 290.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/71DJI6Mia2L._UF8941000_QL80_-250x250.jpg",
    category: "Skincare",
    outOfStock: false
  }
];

export default function ProductGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of hair, skin, and body care products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2 flex-wrap justify-center gap-2">
            {[1, 2, 3, 4, '...', 175, 176, 177].map((page, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-lg min-w-[3rem] ${
                  page === 1 
                    ? 'bg-pink-500 text-white border-pink-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}