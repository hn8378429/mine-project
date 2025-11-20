// src/app/gift-cards/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const giftCardAmounts = [25, 50, 100, 150, 200, 250, 500];
  const popularProducts = [
    {
      id: 1,
      name: "Luxury Skincare Set",
      price: 89.99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Premium Makeup Kit",
      price: 65.50,
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Hair Care Bundle",
      price: 45.00,
      image: "/api/placeholder/300/300"
    }
  ];

  const handleAddToCart = () => {
    // Implement add to cart logic
    console.log({
      type: "gift-card",
      amount: selectedAmount,
      quantity,
      recipientName,
      recipientEmail,
      senderName,
      message
    });
    alert("Gift card added to cart!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gift Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The perfect present for every beauty lover. Let them choose what they really want!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Card Customization */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Create Your Gift Card
            </h2>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Select Amount
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {giftCardAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      selectedAmount === amount
                        ? "border-pink-500 bg-pink-50 text-pink-700"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <span className="font-bold">${amount}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <input
                  type="number"
                  min="10"
                  max="1000"
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
                <span className="text-gray-600 ml-4">
                  ${(selectedAmount * quantity).toFixed(2)} total
                </span>
              </div>
            </div>

            {/* Recipient Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recipient Details
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Recipient's Name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <input
                  type="email"
                  placeholder="Recipient's Email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            {/* Personal Message */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Personal Message
              </h3>
              <textarea
                placeholder="Add a personal message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* Sender Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Your Details
              </h3>
              <input
                type="text"
                placeholder="Your Name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-pink-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-pink-600 transition-colors"
            >
              Add to Cart - ${(selectedAmount * quantity).toFixed(2)}
            </button>
          </div>

          {/* Gift Card Preview & Info */}
          <div className="space-y-8">
            {/* Gift Card Preview */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💄</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Beauty Store Gift Card</h3>
                <div className="text-4xl font-bold mb-4">${selectedAmount}</div>
                <p className="text-pink-100 mb-4">
                  {recipientName || "Recipient's Name"}
                </p>
                <p className="text-pink-200 text-sm">
                  {message || "Your personal message will appear here..."}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Our Gift Cards?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Never expires - use anytime</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Works for all products in our store</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Instant email delivery</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Beautiful digital design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Perfect for any occasion</span>
                </li>
              </ul>
            </div>

            {/* Popular Products */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Products They'll Love
              </h3>
              <div className="space-y-4">
                {popularProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">🛍️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{product.name}</h4>
                      <p className="text-pink-600 font-semibold">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">How does it work?</h4>
                  <p className="text-gray-600 text-sm">
                    After purchase, the recipient will receive an email with their gift card code that can be used at checkout.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">When will it be delivered?</h4>
                  <p className="text-gray-600 text-sm">
                    Gift cards are delivered instantly via email, 24/7.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Can I use multiple gift cards?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes! You can use multiple gift cards on a single order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-6">
            Our beauty experts are here to help you find the perfect gift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}