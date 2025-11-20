// components/JustForMen.tsx
"use client";

import { useCart } from "@/context/CartContext";

const menProducts = [
  {
    id: 1,
    name: "Just For Men Shampoo-In Color, Real Black",
    description: "Easy shampoo-in hair color for men in real black shade",
    price: 160.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/40.jpg-250x250.jpg",
    category: "Hair Color",
    outOfStock: false
  },
  {
    id: 2,
    name: "Just For Men Shampoo-In Color, Jet Black",
    description: "Shampoo-in hair color for men in deep jet black shade",
    price: 160.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/Just-For-Men-Shampoo-in-Hair-Dye-for-Men-H-60-Jet-Black-3-Pack_dff5fb7a-2596-4c51-ade7-1378296828e7.710a23bc428fe0c634cc2cf268bd17af.jpeg-250x250.webp",
    category: "Hair Color",
    outOfStock: false
  },
  {
    id: 3,
    name: "Just For Men Mustache & Beard Dye, Real Black",
    description: "Specially formulated dye for mustache and beard in real black",
    price: 200.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/Just-For-Men-Mustache-Beard-Coloring-for-Gray-Hair-M55-Real-Black_c63418b0-194c-4da6-bfef-703fbea1b8c2.e5ae206acd1d69f4b1ca5572fade8b71.jpeg-250x250.webp",
    category: "Beard Care",
    outOfStock: false
  },
  {
    id: 4,
    name: "Gillette ClearShield Cool Wave Clear Gel Men's Antiperspirant / Deodorant, 3.8 oz.",
    description: "Clear gel antiperspirant and deodorant with cool wave scent",
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
    description: "Versatile twist and pik comb for precise styling",
    price: 120.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/PrimexTwistandPikCombMain.webp-250x250.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 7,
    name: "Annie Supreme Wave Brush Medium Boar Bristles, Long Handle",
    description: "Wave brush with medium boar bristles and comfortable long handle",
    price: 90.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/suprememediumwoodenbrushbig.webp-250x250.jpeg",
    category: "Hair Accessories",
    outOfStock: false
  },
  {
    id: 8,
    name: "Annie Supreme Club Brush Medium Boar Bristles, Short Handle",
    description: "Club brush with medium boar bristles and compact short handle",
    price: 90.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/09/SupremeBrush_grande.png-250x250.webp",
    category: "Hair Accessories",
    outOfStock: false
  }
];

export default function JustForMen() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-gray-50 to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <span>👨</span>
            <span>PREMIUM GROOMING</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">JUST FOR MEN!</h2>
          <p className="text-3xl font-semibold text-blue-600 mb-4">
            HAIRCARE, BEARD CARE & MORE!
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium grooming products specially formulated for men. From hair color to beard care, 
            we've got everything you need for your grooming routine.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 overflow-hidden group"
            >
              {/* Product Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                  product.category === "Hair Color" 
                    ? "bg-blue-500 text-white"
                    : product.category === "Beard Care"
                    ? "bg-green-500 text-white"
                    : product.category === "Personal Care"
                    ? "bg-purple-500 text-white"
                    : "bg-gray-500 text-white"
                }`}>
                  {product.category}
                </div>
              </div>

              {/* Product Info Section */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="font-bold text-base mb-2 text-gray-800 leading-tight line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-blue-600">
                    ₵{product.price.toFixed(2)}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.outOfStock}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                    product.outOfStock
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {product.outOfStock ? 'Out of Stock' : 'Add to cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-2xl transform hover:scale-105">
            SHOP ALL MEN'S PRODUCTS
          </button>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💇</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Hair Care</h4>
            <p className="text-gray-600 text-sm">
              Professional hair color, shampoos, and styling products for perfect hair every day
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧔</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Beard Care</h4>
            <p className="text-gray-600 text-sm">
              Beard dyes, brushes, and grooming tools for a well-maintained beard
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🪒</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Personal Care</h4>
            <p className="text-gray-600 text-sm">
              Deodorants and grooming essentials for fresh and confident days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}