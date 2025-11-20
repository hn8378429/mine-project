// src/app/return-policy/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReturnPolicy() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "return-period", title: "Return Period" },
    { id: "eligibility", title: "Eligibility Conditions" },
    { id: "non-returnable", title: "Non-Returnable Items" },
    { id: "return-process", title: "Return Process" },
    { id: "refunds", title: "Refunds" },
    { id: "exchanges", title: "Exchanges" },
    { id: "damaged-items", title: "Damaged or Defective Items" },
    { id: "return-shipping", title: "Return Shipping" },
    { id: "contact", title: "Contact Support" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Return Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We want you to be completely satisfied with your purchase. Here's everything you need to know about returns and refunds.
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
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-green-900">14-Day Return Window</h3>
                <p className="text-green-700 text-sm">Easy returns for unused items in original packaging</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-900">100%</div>
              <div className="text-green-700 text-sm">Refund Guarantee</div>
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
                  At Beauty Store, we stand behind the quality of our products. If you're not completely satisfied with 
                  your purchase, we're here to help with our straightforward return policy.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> For health and safety reasons, we cannot accept returns of opened or used 
                    beauty products unless they are defective or damaged.
                  </p>
                </div>
              </section>

              {/* Return Period */}
              <section id="return-period" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Return Period</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Standard Returns</h4>
                      <p className="text-green-700">14 days from delivery date</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-900 mb-2">Defective Items</h4>
                      <p className="text-orange-700">30 days from delivery date</p>
                    </div>
                  </div>
                  <p>
                    The return period starts from the date you receive your order. To be eligible for a return, 
                    your item must be unused and in the same condition that you received it.
                  </p>
                </div>
              </section>

              {/* Eligibility Conditions */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility Conditions</h2>
                <div className="space-y-4 text-gray-600">
                  <p>For a successful return, your item must meet the following conditions:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">✅ Must Have</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Original packaging</li>
                        <li>• All tags and labels attached</li>
                        <li>• Unused and unopened</li>
                        <li>• Proof of purchase</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">❌ Must Not Have</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Any signs of use</li>
                        <li>• Damaged packaging</li>
                        <li>• Missing components</li>
                        <li>• Personal hygiene concerns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Non-Returnable Items */}
              <section id="non-returnable" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Returnable Items</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Certain items cannot be returned for health and safety reasons:</p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-3">Items That Cannot Be Returned</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-2">
                        <li>• Opened skincare products</li>
                        <li>• Used makeup items</li>
                        <li>• Opened fragrance products</li>
                        <li>• Personal care appliances</li>
                      </ul>
                      <ul className="space-y-2">
                        <li>• Gift cards</li>
                        <li>• Final sale items</li>
                        <li>• Custom orders</li>
                        <li>• Products without original packaging</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Exception:</strong> Defective or damaged items are always eligible for return or exchange, 
                      regardless of whether they've been opened.
                    </p>
                  </div>
                </div>
              </section>

              {/* Return Process */}
              <section id="return-process" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Return Process</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Contact Support</h4>
                      <p className="text-gray-600 text-xs">Email us within 14 days of delivery</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Get Approval</h4>
                      <p className="text-gray-600 text-xs">Receive return authorization</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Pack & Ship</h4>
                      <p className="text-gray-600 text-xs">Ship items with original packaging</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-pink-600 font-bold">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Receive Refund</h4>
                      <p className="text-gray-600 text-xs">Get refund within 5-7 business days</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Required Information for Return Request</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Order number</li>
                      <li>• Product name and quantity</li>
                      <li>• Reason for return</li>
                      <li>• Photos of the product (if defective)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Refunds */}
              <section id="refunds" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refunds</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-900 mb-2">5-7</div>
                      <p className="text-green-700 text-sm">Business days for refund processing</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-900 mb-2">100%</div>
                      <p className="text-blue-700 text-sm">Product value refunded</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-orange-900 mb-2">Original Method</div>
                      <p className="text-orange-700 text-sm">Refund to original payment</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Important Refund Information</h4>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• Shipping costs are non-refundable</li>
                      <li>• Refunds are processed to the original payment method</li>
                      <li>• For Cash on Delivery orders, refunds are issued via bank transfer or mobile money</li>
                      <li>• Sale items are refunded at the sale price</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Exchanges */}
              <section id="exchanges" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Exchanges</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We currently offer exchanges for defective or damaged items only. If you received a defective product, 
                    we'll replace it with the same item at no additional cost.
                  </p>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Exchange Process</h4>
                    <ol className="space-y-2 text-sm text-purple-800 ml-6">
                      <li>1. Contact our support team with photos of the defective item</li>
                      <li>2. We'll verify the issue and approve the exchange</li>
                      <li>3. We'll ship the replacement item immediately</li>
                      <li>4. You can return the defective item using the provided shipping label</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Damaged Items */}
              <section id="damaged-items" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Damaged or Defective Items</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you receive a damaged or defective item, please contact us within 48 hours of delivery. 
                    We'll arrange for a replacement or refund at no additional cost to you.
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Required for Damaged Items</h4>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• Photos of the damaged product</li>
                      <li>• Photos of the packaging</li>
                      <li>• Description of the damage</li>
                      <li>• Order number and delivery date</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Return Shipping */}
              <section id="return-shipping" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Return Shipping</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Customer-Paid Returns</h4>
                      <p className="text-sm">
                        For change of mind returns, customers are responsible for return shipping costs.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Store-Paid Returns</h4>
                      <p className="text-sm">
                        For defective or damaged items, we provide prepaid return shipping labels.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Shipping Recommendations</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Use a trackable shipping service</li>
                      <li>• Insure the package for its full value</li>
                      <li>• Keep the shipping receipt until refund is processed</li>
                      <li>• Pack items securely to prevent damage during transit</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Support */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Support</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    For return requests or questions about our return policy, please contact our customer support team:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📧</span>
                        <span>returns@beautystore.com</span>
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
                        <span>Response Time: Within 24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Satisfaction Guarantee */}
              <div className="bg-pink-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We're committed to your satisfaction. If you have any issues with your purchase, 
                  we'll work with you to find a solution that meets your needs.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/shipping-policy"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">🚚</div>
                <div className="font-semibold text-gray-900">Shipping Policy</div>
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