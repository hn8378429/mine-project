"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, clearCart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Shopping Cart ({cart.length} item)
      </h1>

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="text-red-600 underline mb-5"
        >
          Clear Cart
        </button>
      )}

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 flex gap-4">
                <Image src={item.image} width={120} height={120} alt={item.title} />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="font-bold text-pink-500">Rs {item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-6 h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <p className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span>Tax:</span>
              <span>Rs {tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>Rs {total.toFixed(2)}</span>
            </p>

            {/* ✅ YEH LINE CHANGE KI HAI - Link add kiya hai */}
            <Link href="/checkout">
              <button className="w-full bg-pink-600 text-white py-2 rounded mb-3">
                Proceed to Checkout
              </button>
            </Link>

            <Link
              href="/shop"
              className="block text-center underline text-gray-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 