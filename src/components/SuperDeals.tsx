// components/SuperDeals.tsx
"use client";

import { useCart } from "@/context/CartContext";

const superDealsProducts = [
  {
    id: 1,
    name: "Medicube Age-R Booster Pro EX, Pink",
    description:
      "Advanced age booster with professional results in pink variant",
    price: 2600.0,
    originalPrice: 2950.0,
    discount: 12,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/08/Product-page-sizes-_pink_22aea8c9-ef0f-4840-b6e3-67ffecd785e1.jpg-250x250.webp",
    category: "Skincare",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 2,
    name: "Medicube Age-R Booster Pro EX, Black",
    description: "Professional age booster in sleek black variant",
    price: 2600.0,
    originalPrice: 2950.0,
    discount: 12,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/08/Product-page-sizes_21dbdf04-151c-4df7-9136-be87452db991.jpg-250x250.webp",
    category: "Skincare",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 3,
    name: "Replenix BP 5% Acne Wash + Aloe Vera, 6.7 oz / 200ml",
    description:
      "Gentle acne wash with 5% benzoyl peroxide and soothing aloe vera",
    price: 440.0,
    originalPrice: 490.0,
    discount: 10,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/07/Replenix__81110_Benzoyl_Peroxide_5_Acne_Wash_Acne-250x250.jpg",
    category: "Skincare",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 4,
    name: "Replenix BP 10% Acne Wash + Aloe Vera, 6.7 oz / 200ml",
    description: "Strong acne wash with 10% benzoyl peroxide for stubborn acne",
    price: 440.0,
    originalPrice: 490.0,
    discount: 10,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/07/productimg-2-250x250.jpeg",
    category: "Skincare",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 5,
    name: "Replenix Blemish Clarifying Acne Treatment, 2 oz / 60 ml",
    description: "Targeted treatment for blemishes and acne spots",
    price: 640.0,
    originalPrice: 690.0,
    discount: 7,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/07/13908177-6154991075879934-250x250.jpg",
    category: "Skincare",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 6,
    name: "NUXE Huile Prodigieuse®, 50ml / 1.6 oz",
    description: "Multi-purpose dry oil for face, body and hair nourishment",
    price: 430.0,
    originalPrice: 480.0,
    discount: 10,
    image:
      "https://urbanmakes.com/wp-content/uploads/2024/04/bd8e50a2-2d4b-4e73-b0e4-2b64713a24e4-250x250.jpeg",
    category: "Body Care",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 7,
    name: "NUXE Huile Prodigieuse® Florale, 50ml",
    description: "Floral scented multi-purpose dry oil for luxurious care",
    price: 430.0,
    originalPrice: 480.0,
    discount: 10,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/04/IMG_4804-250x250.webp",
    category: "Body Care",
    outOfStock: false,
    isOnSale: true,
  },
  {
    id: 8,
    name: "Remington Ionic Dry 2200 Hairdryer",
    description: "Ionic technology hairdryer for fast drying and frizz control",
    price: 650.0,
    originalPrice: 700.0,
    discount: 7,
    image:
      "https://urbanmakes.com/wp-content/uploads/2025/04/611SPzf1SnL._AC_SL1500_-250x250.jpg",
    category: "Hair Tools",
    outOfStock: true,
    isOnSale: true,
  },
];

export default function SuperDeals() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4 animate-pulse">
            <span>🔥</span>
            <span>LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            SUPER DEALS!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amazing discounts on premium beauty products! Don't wait - these
            exclusive offers won't last long.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {superDealsProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-red-100 overflow-hidden group"
            >
              {/* Product Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {product.discount}% off!
                </div>

                {/* Sale Badge */}
                <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                  Sale!
                </div>

                {/* Out of Stock Overlay */}
                {product.outOfStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                      Out of stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info Section */}
              <div className="p-6">
                {/* Product Name */}
                <h3 className="font-bold text-lg mb-2 text-gray-800 leading-tight line-clamp-2">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600">
                      ₵{product.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ₵{product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="line-through">
                      Original price was: ₵{product.originalPrice.toFixed(2)}.
                    </span>
                    <span className="font-semibold text-green-600 ml-1">
                      Current price is: ₵{product.price.toFixed(2)}.
                    </span>
                  </div>
                  <p className="text-green-600 text-sm font-semibold">
                    You save ₵
                    {(product.originalPrice - product.price).toFixed(2)}!
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.outOfStock}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                    product.outOfStock
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                  }`}
                >
                  {product.outOfStock ? "Out of stock" : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Hurry! These Deals Are Flying Fast! 🚀
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Limited quantities available at these incredible prices. Shop now
              before they're gone forever!
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105">
              SHOP ALL DEALS NOW
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-8 mt-12 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm">Free Shipping Over ₵500</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm">30-Day Return Policy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm">Authentic Products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
