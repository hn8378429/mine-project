"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

      {wishlist.length === 0 && (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="p-5 border rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src={item.image}
              className="h-40 mx-auto object-contain"
              alt={item.title}
            />

            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
            <p className="text-pink-600 font-bold">Rs {item.price}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  addToCart({
  id: item.id,
  title: item.title,
  price: item.price,
  image: item.image,
  quantity: 1,
});

                }}
                className="flex-1 bg-pink-600 text-white py-2 rounded-lg"
              >
                Add to Cart
              </button>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="flex-1 bg-gray-200 text-black py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
