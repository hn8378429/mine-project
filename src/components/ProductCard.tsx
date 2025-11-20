// components/ProductCard.tsx
"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

// ✅ Product type ko export karein
export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  outOfStock?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(product.id.toString());

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const handleWishlistToggle = () => {
    toggleWishlist({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full group relative">
      {/* Wishlist Heart Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
      >
        <svg
          className={`w-5 h-5 transition-colors duration-200 ${
            isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'
          }`}
          fill={isWishlisted ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] mb-4 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {product.outOfStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Out of stock
          </div>
        )}
      </div>
      
      {/* Product Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14 overflow-hidden text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-2 text-sm line-clamp-2 h-10 overflow-hidden flex-1">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-pink-600 mb-4">
          ₵{product.price}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-auto">
        <button
          onClick={handleAddToCart}
          disabled={product.outOfStock}
          className={`w-full py-3 rounded font-medium transition-all duration-200 ${
            product.outOfStock 
              ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
              : 'bg-pink-600 hover:bg-pink-700 text-white shadow hover:shadow-lg'
          }`}
        >
          {product.outOfStock ? 'Out of Stock' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}