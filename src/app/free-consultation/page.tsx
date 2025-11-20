// app/free-consultation/page.tsx
"use client";

import { useState } from "react";

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    skinType: "",
    hairType: "",
    concerns: "",
    goals: ""
  });

  const skinTypes = ["Oily", "Dry", "Combination", "Normal", "Sensitive", "Acne-Prone", "Mature"];
  const hairTypes = ["Straight", "Wavy", "Curly", "Coily", "Kinky", "Locs", "Relaxed", "Color-Treated"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation form submitted:", formData);
    alert("Thank you for your consultation request! Our beauty experts will contact you soon.");
    setFormData({ name: "", phone: "", skinType: "", hairType: "", concerns: "", goals: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Beauty Consultation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Get personalized product recommendations tailored to your unique needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Skin Type *
                </label>
                <select
                  name="skinType"
                  value={formData.skinType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select skin type</option>
                  {skinTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hair Type *
                </label>
                <select
                  name="hairType"
                  value={formData.hairType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select hair type</option>
                  {hairTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Main Concerns *
              </label>
              <textarea
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your skin/hair concerns..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Goals *
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                required
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What would you like to achieve?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Get Personalized Recommendations
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}