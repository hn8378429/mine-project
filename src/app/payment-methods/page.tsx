// src/app/payment-methods/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function PaymentMethods() {
  const [activeTab, setActiveTab] = useState("all");

  const paymentMethods = [
    {
      id: 1,
      name: "Credit & Debit Cards",
      icon: "💳",
      description: "Secure card payments processed through encrypted channels",
      methods: ["Visa", "Mastercard", "American Express", "Discover"],
      status: "active",
      category: "cards"
    },
    {
      id: 2,
      name: "Mobile Money",
      icon: "📱",
      description: "Quick and convenient mobile payments",
      methods: ["MTN Mobile Money", "Vodafone Cash", "AirtelTigo Money"],
      status: "active",
      category: "mobile"
    },
    {
      id: 3,
      name: "Bank Transfer",
      icon: "🏦",
      description: "Direct bank transfers for larger purchases",
      methods: ["Instant Transfer", "Wire Transfer", "Direct Deposit"],
      status: "active",
      category: "bank"
    },
    {
      id: 4,
      name: "Digital Wallets",
      icon: "👛",
      description: "Fast payments using digital wallet services",
      methods: ["PayPal", "Apple Pay", "Google Pay", "Samsung Pay"],
      status: "active",
      category: "digital"
    },
    {
      id: 5,
      name: "Cash on Delivery",
      icon: "💰",
      description: "Pay when your order arrives at your doorstep",
      methods: ["Cash Payment"],
      status: "active",
      category: "cash"
    },
    {
      id: 6,
      name: "Installment Plans",
      icon: "📅",
      description: "Split your payment into manageable installments",
      methods: ["3-Month Plan", "6-Month Plan", "12-Month Plan"],
      status: "active",
      category: "installment"
    }
  ];

  const securityFeatures = [
    {
      title: "SSL Encryption",
      description: "All transactions are protected with 256-bit SSL encryption",
      icon: "🔒"
    },
    {
      title: "PCI DSS Compliant",
      description: "We adhere to strict payment card industry security standards",
      icon: "🛡️"
    },
    {
      title: "Fraud Protection",
      description: "Advanced fraud detection systems monitor all transactions",
      icon: "🚨"
    },
    {
      title: "Secure Storage",
      description: "Your payment data is never stored on our servers",
      icon: "💾"
    }
  ];

  const faqs = [
    {
      question: "Is it safe to pay with my credit card?",
      answer: "Yes, all credit card payments are processed through PCI DSS compliant payment gateways with 256-bit SSL encryption. We never store your full card details on our servers."
    },
    {
      question: "What mobile money providers do you accept?",
      answer: "We accept MTN Mobile Money, Vodafone Cash, and AirtelTigo Money. The payment is processed instantly and you'll receive confirmation immediately."
    },
    {
      question: "Can I pay with multiple payment methods?",
      answer: "Currently, we only accept one payment method per order. However, you can use gift cards in combination with other payment methods during checkout."
    },
    {
      question: "Are there any additional fees for using certain payment methods?",
      answer: "No, we don't charge any additional fees for any payment method. The price you see at checkout is the final amount you'll pay."
    },
    {
      question: "How does Cash on Delivery work?",
      answer: "For Cash on Delivery orders, you pay when your package is delivered. Please have the exact amount ready as our delivery personnel may not carry change."
    },
    {
      question: "What is your refund policy for payments?",
      answer: "Refunds are processed back to the original payment method within 5-7 business days. For Cash on Delivery, we'll provide bank transfer or mobile money refund options."
    }
  ];

  const filteredMethods = activeTab === "all" 
    ? paymentMethods 
    : paymentMethods.filter(method => method.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, convenient, and flexible payment options for every beauty enthusiast. 
            Your safety and convenience are our top priorities.
          </p>
        </div>

        {/* Security Banner */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-semibold text-green-900">100% Secure Payments</h3>
                <p className="text-green-700 text-sm">
                  All transactions are encrypted and secure. Your payment information is protected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="mb-16">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "all" 
                  ? "bg-pink-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Methods
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "cards" 
                  ? "bg-pink-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              💳 Cards
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "mobile" 
                  ? "bg-pink-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              📱 Mobile Money
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "digital" 
                  ? "bg-pink-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              👛 Digital Wallets
            </button>
            <button
              onClick={() => setActiveTab("cash")}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === "cash" 
                  ? "bg-pink-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              💰 Cash
            </button>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMethods.map((method) => (
              <div key={method.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{method.icon}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {method.status === "active" ? "Available" : "Coming Soon"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <div className="space-y-2">
                  {method.methods.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Your Security is Our Priority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Choose Section */}
        <div className="bg-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Which Payment Method is Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">For Speed</h3>
              <p className="text-gray-600 text-sm mb-4">
                Choose Mobile Money or Digital Wallets for instant payment processing and fastest order confirmation.
              </p>
              <div className="text-pink-600 text-sm font-semibold">
                Recommended: 📱 Mobile Money
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">For Security</h3>
              <p className="text-gray-600 text-sm mb-4">
                Credit cards offer advanced fraud protection and chargeback options for maximum security.
              </p>
              <div className="text-pink-600 text-sm font-semibold">
                Recommended: 💳 Credit Cards
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">For Flexibility</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cash on Delivery lets you inspect products before payment. Installment plans help manage budgets.
              </p>
              <div className="text-pink-600 text-sm font-semibold">
                Recommended: 💰 Cash on Delivery
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with Payments?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you with any payment-related questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/shipping-policy"
              className="border border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors"
            >
              View Shipping Policy
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              +123456789
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              support@beautystore.com
            </div>
            <div className="flex items-center">
              <span className="mr-2">💬</span>
              Live Chat Available
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Trusted and Secured by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">VISA</div>
            <div className="text-2xl font-bold text-gray-700">Mastercard</div>
            <div className="text-xl font-bold text-blue-600">PayPal</div>
            <div className="text-lg font-bold text-gray-700">PCI DSS</div>
            <div className="text-lg font-bold text-green-600">SSL</div>
          </div>
        </div>
      </div>
    </div>
  );
}