// src/app/terms/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "account", title: "Account Registration" },
    { id: "orders", title: "Orders & Payments" },
    { id: "shipping", title: "Shipping & Delivery" },
    { id: "returns", title: "Returns & Refunds" },
    { id: "products", title: "Product Information" },
    { id: "intellectual", title: "Intellectual Property" },
    { id: "liability", title: "Liability" },
    { id: "privacy", title: "Privacy" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" }
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
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or purchasing our products.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
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
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to Beauty Store ("we," "our," "us"). These Terms and Conditions govern your use of our website 
                  (www.beautystore.com) and your purchase of products from us. By accessing our website and making a purchase, 
                  you agree to be bound by these terms.
                </p>
                <p className="text-gray-600">
                  These terms constitute a legally binding agreement between you and Beauty Store. If you disagree with any 
                  part of these terms, you may not access our website or purchase our products.
                </p>
              </section>

              {/* Definitions */}
              <section id="definitions" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>"Website"</strong> refers to Beauty Store, accessible from www.beautystore.com
                  </li>
                  <li>
                    <strong>"Products"</strong> refers to all beauty and cosmetic items available for purchase on our website
                  </li>
                  <li>
                    <strong>"Customer," "You"</strong> refers to the person accessing our website or purchasing our products
                  </li>
                  <li>
                    <strong>"Order"</strong> refers to a request by you to purchase products from us
                  </li>
                  <li>
                    <strong>"Content"</strong> refers to text, images, videos, and other materials present on our website
                  </li>
                </ul>
              </section>

              {/* Account Registration */}
              <section id="account" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    To access certain features of our website and make purchases, you may be required to register an account. 
                    You agree to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• Provide accurate, current, and complete information during registration</li>
                    <li>• Maintain and promptly update your account information</li>
                    <li>• Maintain the security of your password and accept all risks of unauthorized access</li>
                    <li>• Notify us immediately of any breach of security or unauthorized use of your account</li>
                  </ul>
                  <p>
                    We reserve the right to suspend or terminate your account if any information provided during 
                    registration or thereafter proves to be inaccurate, false, or misleading.
                  </p>
                </div>
              </section>

              {/* Orders & Payments */}
              <section id="orders" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Orders & Payments</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="font-semibold text-gray-900">Order Acceptance</h3>
                  <p>
                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any 
                    order for any reason, including limitations on quantities available for purchase, inaccuracies, 
                    or errors in product or pricing information.
                  </p>

                  <h3 className="font-semibold text-gray-900">Pricing</h3>
                  <p>
                    All prices are shown in US Dollars (USD) and include applicable taxes unless otherwise stated. 
                    We reserve the right to adjust prices at any time, but price changes will not affect confirmed orders.
                  </p>

                  <h3 className="font-semibold text-gray-900">Payment Methods</h3>
                  <p>
                    We accept various payment methods including credit/debit cards, mobile money, and bank transfers. 
                    Payment is processed securely through our payment partners. By providing payment information, 
                    you represent that you are authorized to use the payment method.
                  </p>

                  <h3 className="font-semibold text-gray-900">Order Confirmation</h3>
                  <p>
                    You will receive an order confirmation email once your payment is successfully processed. This email 
                    constitutes our acceptance of your order and forms a contract between us.
                  </p>
                </div>
              </section>

              {/* Shipping & Delivery */}
              <section id="shipping" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Shipping & Delivery</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We ship to locations within Ghana and selected international destinations. Shipping costs and delivery 
                    times vary based on your location and the shipping method selected.
                  </p>
                  <p>
                    Estimated delivery times are provided for guidance only and are not guaranteed. We are not responsible 
                    for delays caused by customs, weather conditions, or other factors beyond our control.
                  </p>
                  <p>
                    Risk of loss and title for products pass to you upon delivery to the carrier. You are responsible for 
                    filing any claims with carriers for damaged or lost shipments.
                  </p>
                </div>
              </section>

              {/* Returns & Refunds */}
              <section id="returns" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Returns & Refunds</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="font-semibold text-gray-900">Return Policy</h3>
                  <p>
                    We accept returns within 14 days of delivery for unused and unopened products in their original 
                    packaging. Products must be in resalable condition.
                  </p>

                  <h3 className="font-semibold text-gray-900">Refund Process</h3>
                  <p>
                    Refunds will be processed to the original payment method within 5-7 business days after we receive 
                    and inspect the returned items. Shipping costs are non-refundable.
                  </p>

                  <h3 className="font-semibold text-gray-900">Damaged or Defective Products</h3>
                  <p>
                    If you receive a damaged or defective product, please contact us within 48 hours of delivery. 
                    We will arrange for a replacement or refund at no additional cost to you.
                  </p>
                </div>
              </section>

              {/* Product Information */}
              <section id="products" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Product Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We strive to display product colors and images as accurately as possible. However, actual colors may 
                    vary due to monitor settings and lighting conditions.
                  </p>
                  <p>
                    Product descriptions are provided for informational purposes only. We do not warrant that product 
                    descriptions or other content are accurate, complete, reliable, current, or error-free.
                  </p>
                  <p>
                    <strong>Important:</strong> Always check product ingredients if you have allergies or sensitive skin. 
                    Perform a patch test before using new products. Discontinue use if irritation occurs and consult a 
                    healthcare professional.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    All content on this website, including text, graphics, logos, images, and software, is the property 
                    of Beauty Store or our content suppliers and is protected by international copyright laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit 
                    any content from our website without our express written permission.
                  </p>
                  <p>
                    Beauty Store and our logo are trademarks of our company. You may not use these trademarks without 
                    our prior written permission.
                  </p>
                </div>
              </section>

              {/* Liability */}
              <section id="liability" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Liability</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="font-semibold text-gray-900">Limitation of Liability</h3>
                  <p>
                    To the fullest extent permitted by law, Beauty Store shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages resulting from your use of or inability to use the website 
                    or products.
                  </p>

                  <h3 className="font-semibold text-gray-900">Product Liability</h3>
                  <p>
                    Our total liability for any claims related to products sold is limited to the purchase price of the 
                    products. We are not liable for any allergic reactions or skin sensitivities resulting from product use.
                  </p>

                  <h3 className="font-semibold text-gray-900">Indemnification</h3>
                  <p>
                    You agree to indemnify and hold harmless Beauty Store and our affiliates from any claims, damages, 
                    or expenses arising from your breach of these terms or your use of our website or products.
                  </p>
                </div>
              </section>

              {/* Privacy */}
              <section id="privacy" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your privacy is important to us. Our <Link href="/privacy-policy" className="text-pink-500 hover:underline">Privacy Policy</Link> explains how we collect, 
                    use, and protect your personal information. By using our website, you consent to the practices 
                    described in our Privacy Policy.
                  </p>
                  <p>
                    We implement appropriate security measures to protect your personal information but cannot guarantee 
                    absolute security of data transmission over the internet.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                    posting on our website. Your continued use of our website after changes are posted constitutes your 
                    acceptance of the modified terms.
                  </p>
                  <p>
                    We will notify you of significant changes via email or through notices on our website. It is your 
                    responsibility to review these terms periodically for updates.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📧</span>
                        <span>legal@beautystore.com</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📞</span>
                        <span>+123456789</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📍</span>
                        <span>Pakistan, Karachi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">⏰</span>
                        <span>Mon-Fri: 9AM-6PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceptance */}
              <div className="bg-pink-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Acceptance of Terms</h3>
                <p className="text-gray-600 text-sm">
                  By using our website and purchasing our products, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/privacy-policy"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">🔒</div>
                <div className="font-semibold text-gray-900">Privacy Policy</div>
              </Link>
              <Link
                href="/return-policy"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">↩️</div>
                <div className="font-semibold text-gray-900">Return Policy</div>
              </Link>
              <Link
                href="/shipping-policy"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">🚚</div>
                <div className="font-semibold text-gray-900">Shipping Policy</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}