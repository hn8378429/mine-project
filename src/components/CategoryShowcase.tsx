// src/components/CategoryShowcase.tsx - Simplified
"use client";

import Link from "next/link";

export default function CategoryShowcase() {
  const categories = [
    {
  title: "KINKY.CURLY.COILY",
  subtitle: ".LOC'D.WAVY...",
  description: "SOMETHING FOR EVERY HAIR TYPE!",
  buttonText: "SHOP NOW",
  bgColor: "from-purple-500 to-pink-500",
  link: "/hair" // Hair page link
},
   {
  title: "JUST FOR MEN!",
  subtitle: "HAIRCARE, BEARD CARE & MORE!",
  description: "",
  buttonText: "SHOP NOW", 
  bgColor: "from-blue-500 to-teal-500",
  link: "/justmen" // Men's page link
},
    {
      title: "KIDS' HAIRCARE",
      subtitle: "MADE EASY!",
      description: "",
      buttonText: "SHOP NOW",
      bgColor: "from-green-400 to-blue-400",
      link: "/kids-haircare" // Kids Haircare page link
    },
    {
      title: "SUPER DEALS!",
      subtitle: "LIMITED TIME OFFERS",
      description: "UP TO 12% OFF!",
      buttonText: "SHOP NOW",
      bgColor: "from-red-500 to-orange-500",
      link: "/super-deals" // Super Deals page link
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${category.bgColor} rounded-2xl p-8 text-white shadow-xl`}
            >
              <div className="h-64 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <p className="text-xl md:text-2xl font-semibold mb-2">
                      {category.subtitle}
                    </p>
                  )}
                  {category.description && (
                    <p className="text-lg opacity-90">
                      {category.description}
                    </p>
                  )}
                </div>
                
                <Link
                  href={category.link}
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg w-fit"
                >
                  {category.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}