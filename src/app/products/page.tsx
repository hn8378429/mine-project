"use client";

import Image from "next/image";
import { productsData } from "@/data/productsData";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="w-full h-auto rounded"
            />

            {/* Product Title */}
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>

            {/* Price */}
            <p className="font-bold mt-2">Rs {product.price}</p>

            {/* Add To Cart Button */}
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.name, // converting name → title
                  image: product.image,
                  price: product.price,
                  quantity: 1,          // default quantity
                })
              }
              className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
