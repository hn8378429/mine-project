// components/KidsHaircare.tsx
"use client";

import { useCart } from "@/context/CartContext";

const kidsHaircareProducts = [
  {
    id: 1,
    name: "Curly Kids Curl Poppin Curling Creme, 8 oz",
    description: "Curling creme for kids with curly hair",
    price: 110.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/12/IMG_8244-250x250.jpeg",
    category: "Kids Hair Care",
    outOfStock: false
  },
  {
    id: 2,
    name: "Sunny Isle Kids Care Extreme Hydrating Shampoo, 12oz",
    description: "Extreme hydrating shampoo for kids' delicate hair",
    price: 140.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Sunny-Isle-Kids-Care-Moisture-Rich-Detangler-8oz-FRONT-1800-x-1800.jpg-250x250.webp",
    category: "Kids Hair Care",
    outOfStock: true
  },
  {
    id: 3,
    name: "Sunny Isle Kids Care Extreme Hydrating Conditioner, 12oz",
    description: "Extreme hydrating conditioner for kids' hair",
    price: 140.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Sunny-Isle-Kids-Care-Extreme-Hydrating-Conditioner-12oz-FRONT-1800-x-1800.jpg-250x250.webp",
    category: "Kids Hair Care",
    outOfStock: false
  },
  {
    id: 4,
    name: "Sunny Isle Kids Care Moisture-Rich Leave-In Detangler, 8oz",
    description: "Leave-in detangler for kids' hair with rich moisture",
    price: 140.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/07/Sunny-Isle-Kids-Care-Moisture-Rich-Detangler-8oz-FRONT-1800-x-1800.jpg-250x250.webp",
    category: "Kids Hair Care",
    outOfStock: false
  },
  {
    id: 5,
    name: "EBIN Braid Formula Anti-Tension Gel (Minty) - Super Hold, 180ml",
    description: "Anti-tension gel for braids with minty freshness and super hold",
    price: 150.00,
    image: "https://urbanmakes.com/wp-content/uploads/2025/10/71EZzY2YeZL-250x250.jpg",
    category: "Kids Hair Care",
    outOfStock: false
  }
];

export default function KidsHaircare() {
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
    <section className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <span>👶</span>
            <span>GENTLE & SAFE FOR KIDS</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">KIDS' HAIRCARE</h2>
          <p className="text-3xl font-semibold text-blue-600 mb-4">MADE EASY!</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gentle, effective hair care solutions specially formulated for your little ones. 
            Make hair care time fun and stress-free!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {kidsHaircareProducts.map((product) => (
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
                
                {/* Out of Stock Badge */}
                {product.outOfStock && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Out of Stock
                  </div>
                )}
                
                {/* Kid-Friendly Badge */}
                {!product.outOfStock && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    👶 Kid-Safe
                  </div>
                )}
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
                      : 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-lg hover:shadow-xl transform hover:scale-105'
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
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-2xl transform hover:scale-105">
            SHOP ALL KIDS HAIRCARE
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Gentle Formulas</h4>
            <p className="text-gray-600 text-sm">
              Specially formulated with gentle ingredients safe for children's delicate hair and scalp
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💧</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Moisture Rich</h4>
            <p className="text-gray-600 text-sm">
              Deep hydration without harsh chemicals. Keeps hair soft, manageable and healthy
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Easy to Use</h4>
            <p className="text-gray-600 text-sm">
              Simple application makes hair care routine fun and stress-free for both kids and parents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}