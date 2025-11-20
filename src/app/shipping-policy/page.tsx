// src/app/shipping-policy/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShippingPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "shipping-areas", title: "Shipping Areas" },
    { id: "shipping-methods", title: "Shipping Methods" },
    { id: "delivery-times", title: "Delivery Times" },
    { id: "shipping-costs", title: "Shipping Costs" },
    { id: "order-processing", title: "Order Processing" },
    { id: "tracking-orders", title: "Tracking Orders" },
    { id: "delivery-issues", title: "Delivery Issues" },
    { id: "international", title: "International Shipping" },
    { id: "contact", title: "Contact Support" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const shippingMethods = [
    {
      name: "Standard Shipping",
      delivery: "3-5 business days",
      cost: "$4.99",
      features: ["Trackable", "Signature required", "Insurance included"]
    },
    {
      name: "Express Shipping",
      delivery: "1-2 business days",
      cost: "$9.99",
      features: ["Priority handling", "Trackable", "Signature required", "Insurance included"]
    },
    {
      name: "Same-Day Delivery",
      delivery: "Same day",
      cost: "$14.99",
      features: ["Available in select areas", "Order by 12 PM", "Trackable", "Signature required"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shipping Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver beauty to your doorstep with fast, reliable, and secure shipping options.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-900">3-5 Days</div>
              <div className="text-blue-700 text-sm">Standard Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-900">Free</div>
              <div className="text-blue-700 text-sm">On orders over $50</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-900">24/7</div>
              <div className="text-blue-700 text-sm">Order Tracking</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Policy Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-pink-100 text-pink-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                <p className="text-gray-600 mb-4">
                  At Beauty Store, we understand that you're excited to receive your beauty products. 
                  That's why we've partnered with reliable shipping carriers to ensure your orders are 
                  delivered safely and promptly.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Note:</strong> All orders are processed and shipped on business days (Monday-Friday, 
                    excluding public holidays).
                  </p>
                </div>
              </section>

              {/* Shipping Areas */}
              <section id="shipping-areas" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Shipping Areas</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Domestic Shipping</h4>
                      <p className="text-blue-700">
                        We currently ship to all addresses within Pakistan. Free shipping is available 
                        for orders over $50.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">International Shipping</h4>
                      <p className="text-purple-700">
                        International shipping is available to select countries. Additional customs fees 
                        and import duties may apply.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Shipping Methods */}
              <section id="shipping-methods" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Shipping Methods</h2>
                <div className="space-y-6">
                  {shippingMethods.map((method, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-pink-300 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{method.name}</h3>
                        <div className="flex items-center space-x-4 mt-2 md:mt-0">
                          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {method.cost}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {method.delivery}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {method.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Delivery Times */}
              <section id="delivery-times" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery Times</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Estimated Delivery Times</h4>
                    <p className="text-yellow-800 text-sm">
                      Delivery times are estimates and begin from the date your order is shipped, not the date it is placed. 
                      Actual delivery times may vary due to carrier delays, weather conditions, or other factors beyond our control.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Domestic Delivery Times</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• <strong>Karachi:</strong> 1-2 business days</li>
                        <li>• <strong>Lahore/Islamabad:</strong> 2-3 business days</li>
                        <li>• <strong>Other Major Cities:</strong> 3-4 business days</li>
                        <li>• <strong>Remote Areas:</strong> 5-7 business days</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">International Delivery Times</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• <strong>Middle East:</strong> 5-7 business days</li>
                        <li>• <strong>Europe:</strong> 7-10 business days</li>
                        <li>• <strong>North America:</strong> 10-14 business days</li>
                        <li>• <strong>Asia Pacific:</strong> 7-12 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Shipping Costs */}
              <section id="shipping-costs" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping Costs</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Free Shipping</h4>
                      <p className="text-green-700">
                        Enjoy free standard shipping on all orders over $50. Applies to domestic orders only.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Standard Rates</h4>
                      <p className="text-blue-700">
                        Shipping costs are calculated based on order weight, destination, and selected shipping method.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Additional Charges</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• <strong>Remote Area Surcharge:</strong> Additional $5 for deliveries to remote locations</li>
                      <li>• <strong>Oversized Items:</strong> Additional charges may apply for large or heavy products</li>
                      <li>• <strong>International Duties:</strong> Customers are responsible for customs fees and import taxes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Order Processing */}
              <section id="order-processing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Order Processing</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Order Placed</h4>
                      <p className="text-gray-600 text-xs">Receive order confirmation</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Order Processed</h4>
                      <p className="text-gray-600 text-xs">1-2 business days</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Order Shipped</h4>
                      <p className="text-gray-600 text-xs">Receive tracking number</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Out for Delivery</h4>
                      <p className="text-gray-600 text-xs">Delivery to your address</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Processing Times</h4>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• <strong>Standard Orders:</strong> Processed within 1-2 business days</li>
                      <li>• <strong>Express Orders:</strong> Processed within 24 hours</li>
                      <li>• <strong>Weekend Orders:</strong> Processed on the next business day</li>
                      <li>• <strong>Holiday Periods:</strong> Processing may take longer during peak seasons</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Tracking Orders */}
              <section id="tracking-orders" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tracking Your Order</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Once your order is shipped, you will receive a confirmation email with your tracking number 
                    and a link to track your package.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">How to Track</h4>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Check your email for tracking information</li>
                        <li>• Log into your account on our website</li>
                        <li>• Use the tracking number with the carrier's website</li>
                        <li>• Contact customer support for assistance</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Tracking Updates</h4>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>• Real-time tracking updates</li>
                        <li>• Delivery notifications</li>
                        <li>• Estimated delivery dates</li>
                        <li>• Delivery attempt notifications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Delivery Issues */}
              <section id="delivery-issues" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Delivery Issues</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Common Delivery Issues</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-2 text-red-800">
                        <li>• <strong>Failed Delivery:</strong> Recipient not available</li>
                        <li>• <strong>Incorrect Address:</strong> Wrong shipping information</li>
                        <li>• <strong>Damaged Package:</strong> Visible damage upon delivery</li>
                      </ul>
                      <ul className="space-y-2 text-red-800">
                        <li>• <strong>Lost Package:</strong> No tracking updates</li>
                        <li>• <strong>Weather Delays:</strong> Extreme weather conditions</li>
                        <li>• <strong>Customs Delays:</strong> International shipments</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">What to Do</h4>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• <strong>Contact the carrier directly</strong> with your tracking number</li>
                      <li>• <strong>Check with neighbors</strong> or building management</li>
                      <li>• <strong>Look for delivery attempt notices</strong> at your address</li>
                      <li>• <strong>Contact our support team</strong> if issues persist</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* International Shipping */}
              <section id="international" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Shipping</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Important Information</h4>
                    <ul className="space-y-2 text-sm text-purple-800">
                      <li>• <strong>Customs Declarations:</strong> We accurately declare all international shipments</li>
                      <li>• <strong>Import Duties:</strong> Customers are responsible for all customs fees and import taxes</li>
                      <li>• <strong>Restricted Items:</strong> Some products may not be eligible for international shipping</li>
                      <li>• <strong>Shipping Times:</strong> International delivery times are estimates only</li>
                    </ul>
                  </div>

                  <p>
                    For international orders, please ensure your shipping address is complete and accurate. 
                    Incorrect addresses may result in additional shipping charges or delivery delays.
                  </p>
                </div>
              </section>

              {/* Contact Support */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Support</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you have any questions about our shipping policy or need assistance with your order, 
                    please contact our customer support team:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📧</span>
                        <span>shipping@beautystore.com</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📞</span>
                        <span>+123456789</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">💬</span>
                        <span>Live Chat: Mon-Fri, 9AM-6PM</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">⏰</span>
                        <span>Response Time: Within 4 hours during business hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Satisfaction Guarantee */}
              <div className="bg-pink-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Reliable Delivery Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We work with trusted carriers to ensure your beauty products arrive safely and on time. 
                  If you experience any issues with your delivery, our support team is here to help.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/return-policy"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">↩️</div>
                <div className="font-semibold text-gray-900">Return Policy</div>
              </Link>
              <Link
                href="/terms"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">📄</div>
                <div className="font-semibold text-gray-900">Terms & Conditions</div>
              </Link>
              <Link
                href="/contact-us"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">📞</div>
                <div className="font-semibold text-gray-900">Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}