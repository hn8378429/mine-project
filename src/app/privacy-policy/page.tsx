// src/app/privacy-policy/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collected", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" }
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
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
                  At Beauty Store ("we," "our," "us"), we are committed to protecting your privacy and ensuring the 
                  security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you visit our website or make a purchase.
                </p>
                <p className="text-gray-600">
                  By using our website, you consent to the data practices described in this policy. If you do not agree 
                  with the terms of this policy, please do not access the website.
                </p>
              </section>

              {/* Information Collected */}
              <section id="information-collected" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>• <strong>Contact Information:</strong> Name, email address, phone number, shipping address</li>
                      <li>• <strong>Account Information:</strong> Username, password, profile preferences</li>
                      <li>• <strong>Payment Information:</strong> Credit card details, billing address (processed securely through our payment partners)</li>
                      <li>• <strong>Order History:</strong> Products purchased, order dates, order values</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>• <strong>Device Information:</strong> IP address, browser type, operating system</li>
                      <li>• <strong>Usage Data:</strong> Pages visited, time spent on site, click patterns</li>
                      <li>• <strong>Location Data:</strong> General geographic location based on IP address</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Information from Third Parties</h3>
                    <p className="text-gray-600">
                      We may receive information about you from third parties, such as social media platforms when you 
                      interact with us through those platforms.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="how-we-use" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Order Processing</h4>
                      <p className="text-sm">Process and fulfill your orders, send order confirmations, and provide customer support</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Personalization</h4>
                      <p className="text-sm">Personalize your shopping experience and recommend products you may like</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                      <p className="text-sm">Send promotional emails, newsletters, and updates (you can opt-out anytime)</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Website Improvement</h4>
                      <p className="text-sm">Analyze website usage to improve our services and user experience</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                    <p className="text-sm">
                      Trusted third parties who assist us in operating our website, conducting business, or servicing you, 
                      such as payment processors, shipping carriers, and marketing platforms.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                    <p className="text-sm">
                      When required by law or to protect our rights, property, or safety, or that of our users or others.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
                    <p className="text-sm">
                      In connection with a merger, acquisition, or sale of all or a portion of our assets.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                      <p>Required for basic website functionality and security</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                      <p>Help us understand how visitors interact with our website</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                      <p>Used to track visitors across websites for advertising purposes</p>
                    </div>
                  </div>

                  <p>
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                    However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Security Measures Include:</h4>
                    <ul className="space-y-2 text-sm ml-6">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure payment processing through PCI DSS compliant partners</li>
                      <li>• Regular security assessments and updates</li>
                      <li>• Limited access to personal information on a need-to-know basis</li>
                    </ul>
                  </div>

                  <p className="text-sm text-gray-500">
                    While we strive to use commercially acceptable means to protect your personal information, 
                    we cannot guarantee its absolute security.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have the following rights regarding your personal information:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Access & Correction</h4>
                      <p className="text-sm">Access and update your personal information in your account settings</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Data Portability</h4>
                      <p className="text-sm">Request a copy of your personal data in a structured format</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
                      <p className="text-sm">Request deletion of your personal information, subject to legal requirements</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Opt-Out</h4>
                      <p className="text-sm">Opt-out of marketing communications at any time using the unsubscribe link</p>
                    </div>
                  </div>

                  <p>
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section id="children-privacy" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our website is not intended for children under the age of 16. We do not knowingly collect personal 
                    information from children under 16. If you are a parent or guardian and believe your child has provided 
                    us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this 
                    Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📧</span>
                        <span>privacy@beautystore.com</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📞</span>
                        <span>+123456789</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">📍</span>
                        <span>Pakistan, Karachi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceptance */}
              <div className="bg-pink-50 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
                <p className="text-gray-600 text-sm">
                  We are committed to protecting your privacy and being transparent about our data practices. 
                  Thank you for trusting Beauty Store with your personal information.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/terms"
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-pink-500 text-lg mb-2">📄</div>
                <div className="font-semibold text-gray-900">Terms & Conditions</div>
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