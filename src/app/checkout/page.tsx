"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [showCoupon, setShowCoupon] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const subtotal = cart.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Checkout</h1>

      {/* Returning Customer / Coupon Section */}
      <div className="space-y-4 mb-8">
        <p className="text-sm bg-gray-100 p-3 rounded">
          Returning customer?{" "}
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="text-blue-600 underline"
          >
            Click here to login
          </button>
        </p>
        {showLogin && (
          <div className="border p-4 rounded bg-white">
            <h3 className="font-semibold mb-2">Login</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email *"
                className="border p-2 rounded w-full"
              />
              <input
                type="password"
                placeholder="Password *"
                className="border p-2 rounded w-full"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Login
              </button>
            </form>
          </div>
        )}

        <p className="text-sm bg-gray-100 p-3 rounded">
          Have a coupon?{" "}
          <button
            onClick={() => setShowCoupon(!showCoupon)}
            className="text-blue-600 underline"
          >
            Click here to enter your code
          </button>
        </p>
        {showCoupon && (
          <div className="border p-4 rounded bg-white">
            <input
              type="text"
              placeholder="Coupon code"
              className="border p-2 rounded w-full mb-3"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Apply Coupon
            </button>
          </div>
        )}
      </div>

      {/* Checkout Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Billing Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border p-2 rounded w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Company Name (optional)"
              className="border p-2 rounded w-full"
            />

            <div>
              <label className="block text-sm font-medium mb-1">Country *</label>
              <select className="border p-2 rounded w-full">
                <option>Ghana</option>
                <option>Pakistan</option>
                <option>USA</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Street address *"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              className="border p-2 rounded w-full"
            />

            <input
              type="text"
              placeholder="Town / City *"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Postcode / Zip (optional)"
              className="border p-2 rounded w-full"
            />

            <input
              type="email"
              placeholder="Email Address *"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="border p-2 rounded w-full"
            />

            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Create an account?
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Ship to a different address?
              </label>
            </div>

            <textarea
              placeholder="Order notes (optional)"
              className="border p-2 rounded w-full h-24"
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-md bg-gray-50 h-fit">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>

          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-right py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((p) => (
                <tr key={p.id} className="border-b">
                  <td className="py-2">
                    {p.title} × {p.quantity || 1}
                  </td>
                  <td className="text-right py-2">
                    ₵{(p.price * (p.quantity || 1)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between font-semibold mb-4">
            <span>Subtotal</span>
            <span>₵{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-semibold mb-4">
            <span>Total</span>
            <span>₵{subtotal.toFixed(2)}</span>
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-start gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span>
                <strong>Cash on Delivery</strong> <br />
                Pay cash upon delivery – The COD option is a safe and easy
                payment method that allows you to pay cash directly to our
                dispatch rider when your order arrives at your doorstep. <br />
                <em>
                  **THIS SERVICE IS CURRENTLY ONLY AVAILABLE TO SHOPPERS IN
                  ACCRA, TEMA & ITS ENVIRONS.**
                </em>
              </span>
            </label>

            <label className="flex items-start gap-2">
              <input type="radio" name="payment" />
              <span>
                <strong>Direct Bank Deposit / Transfer</strong> <br />
                MTN Mobile Money - 059 855 3526
              </span>
            </label>

            <label className="flex items-start gap-2">
              <input type="radio" name="payment" />
              <span>
                <strong>Debit/Credit Cards Paystack Payment Options</strong>
              </span>
            </label>
          </div>

          <div className="flex items-start gap-2 mb-4">
            <input type="checkbox" required />
            <span>
              I have read and agree to the{" "}
              <Link href="#" className="text-blue-600 underline">
                website terms and conditions
              </Link>
              .
            </span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
