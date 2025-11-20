// components/KinkyCurlyCoily.tsx
"use client";

import { useCart } from "@/context/CartContext";

const hairProducts = [
  {
    id: 1,
    name: "TGIN Honey Miracle Hair Mask Packet, 1.75 oz.",
    description: "Instant make over for dry, damaged or color treated hair.",
    price: 50.00,
    image: "https://urbanmakes.com/wp-content/uploads/2024/07/IMG_1339-250x250.jpeg",
    category: "Deep Conditioner",
    hairType: ["Curly", "Coily", "Kinky"],
    outOfStock: false
  },
  {
    id: 2,
    name: "Camille Rose Naturals Curl Love Moisture Milk (8 oz.)",
    description: "Super moisturizing! Leave-in conditioner for curly and wavy hair",
    price: 220.00,
    image: "https://urbanmakes.com/wp-content/uploads/2018/06/84F4F5C2-AF19-4340-94F0-67E24971B356-250x250.webp",
    category: "Leave-In Conditioner",
    hairType: ["Curly", "Wavy"],
    outOfStock: false
  },
  {
    id: 3,
    name: "Mielle Pomegranate & Honey Curl Refreshing Spray – 8 oz.",
    description: "Refreshes & Revitalizes Refreshes & Revitalizes",
    price: 180.00,
    image: "https://urbanmakes.com/wp-content/uploads/2021/03/D48535E9-BEEC-43ED-BA5F-DA00A325D05C-250x250.jpeg",
    category: "Styling Cream",
    hairType: ["Curly", "Coily"],
    outOfStock: false
  },
  {
    id: 4,
    name: "SheaMoisture Jamaican Black Castor Oil Strengthen & Restore Shampoo, 13oz",
    description: "Strengthening shampoo for locs, braids, and natural hair",
    price: 160.00,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGBwMCAf/EADUQAAEDAwIEAwYEBwEAAAAAAAEAAgMEBRESIQYTQVEiMXEHNGGRobFCgYLhFSMyosLR8RT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAeEQEAAgIDAQEBAAAAAAAAAAAAAQIRIQMSMTJRQf/aAAwDAQACEQMRAD8A7iiIgIiIIdVbqerk1VDXvGMadZDfXAPms9dWUFDWMgiljiZriBaZd99eR59tP0WtWLrsiExkEPEtWS3BzgzOwfzG6hzarqFeLdsNPZ3MfbKZzHh+YwXO1asu67+uVNVVYzmS4v8AwPqWuY7GzhyY9x33yPyVqrVnMJz6IiLrgiIgIiICIiDn/tD44rbRcILHw9DBNdJGc2Z8+eXTx9zgjc/QY7hYSb2gNe4i61TXVDMxkUVM8NAB6l0hyck/9V7euF77W8X8SV0FCZIqgxMgk50Y1Na3cbuyBnustb/ZxxGI3mqtLXSEk5/9UJ/zWJtH63ELSk9pt7o3CqpI6CutdO4NmjZDJHMYxtnd5AIHXH03HabVcKe622muFE/XT1MYkjdjGxHUdD8Fwux8BcS0lTUCW2AQv8miphO2MHbUun+ym311q4JoqG5xGKohfI0sL2uwNZI3BI6rsWifHLRDXoiLTIiIgIiICFEQU00/JmqdONTpQN/IDYEn4bj5rwnuMNJRGobiUFzQ1jXAE6v9Ny7fspPJ5tTWjWWhxDXgDzGP3K8Ke20u5ZExgw4FrWjBz5H8snHbUV8+3XtOVIy+6epj5mlzhqc0uwN8bb79vVTbP7n+t33VZBbKcPIMUROkAnlDfA8/v81Z2cYo8DyDiqcGO+i2cJyIi9iYiIgIiICIhQUtTzedVCB5Y7Oc4z0Xjm4tDiyIkAnwhrQT54/F12/bp+18TZ5KqF8Ze1xGMjw5G4zvnYgFVZssj8FsUIy0FzuU/UXANJ/H5FzQcdvmvBOMzlX+LVoqi9x16WBxwQweIZ2GdXb7qytXun6j91n6C2ijmMjqaIOxhpiDgQd8nxOPc/NaC1HNGDgjxHY9FTh+3LeJiIi9aYiIgIiICIiCmmkEdVO52SA4ZCo6GjkpontkreeTqHMeX6nHfc+PGfTCvn++T7keIKL/ABCojH8yE5z1Ibn0yV8631K2dINlgfSGqbJUulMzwWsBOmPA6anOOT16eWwWjtXug8/6j5+qrG1T3NcahhjGcNG+Xd9vkrO0nNGCDkajuq8H2zbxMREXsTEREBERAREKDGVfF1jpbzcaSprHxT0j2iZpgkdpyMjBa052XxTcdcP1EbnU10hezoTHMM+vgXxxRwNap6qvvDJquCoqg0ztje0seW7A4c0kbdiFhaPhKjoGOihqqstJz4yw4/tUJ4KzOW+2myqOM+Gq53JbdQ6Rh8TGQTEfDfQtPwhdaO82SKtt0r5aZ73NbI9paXYOCcHfoua8OcA26evfmuuDHSZJc10WR6ZZhdR4csdFw5aIbXbGvbTQ508x5c4knJJJ+JWqccV3Dkys0RFVkREQf//Z",
    category: "Shampoo",
    hairType: ["Locs", "Natural", "Kinky"],
    outOfStock: false
  },
  {
    id: 5,
    name: "Eden BodyWorks Jojoba Monoi Deep Conditioner, 16oz",
    description: "Deep conditioner with jojoba and monoi oil for all hair types",
    price: 200.00,
    image: "https://urbanmakes.com/wp-content/uploads/2014/07/C3E7421E-8A8A-40B5-94C5-BBEFEFB20A8F-250x250.jpeg",
    category: "Deep Conditioner",
    hairType: ["All Types"],
    outOfStock: false
  },
  {
    id: 6,
    name: "As I Am Coconut Cowash Cleansing Conditioner, 16oz",
    description: "Co-wash cleansing conditioner for curly and coily hair",
    price: 170.00,
    image: "https://urbanmakes.com/wp-content/uploads/2014/09/IMG_3460-250x250.jpeg",
    category: "Co-Wash",
    hairType: ["Curly", "Coily"],
    outOfStock: false
  },
  {
    id: 7,
    name: "Taliah Waajid Curly Curl Cream, 6 oz.",
    description: "Hair, Leave-in Products, Moisturisers, Stylers & Curl Definers",
    price: 150.00,
    image: "https://urbanmakes.com/wp-content/uploads/2017/05/Curly-Curl-Cream-6oz_Front-min_1d3f1d48-fab9-4185-b7c0-46e2b9803422_345x345.jpg-250x250.webp",
    category: "Styling Cream",
    hairType: ["Protective Styles", "Braids"],
    outOfStock: false
  },
  {
    id: 8,
    name: "Curls Blueberry Bliss Reparative Hair Mask, 8 oz",
    description: "Reparative hair mask with blueberry extract for damaged hair",
    price: 75.00,
    image: "https://urbanmakes.com/wp-content/uploads/2018/01/029C9D53-7379-4480-9D31-FE205D03FDF4-250x250.jpeg",
    category: "Hair Mask",
    hairType: ["Curly", "Coily", "Damaged"],
    outOfStock: false
  }
];

export default function KinkyCurlyCoily() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <span>✨</span>
            <span>FOR ALL HAIR TYPES</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">KINKY.CURLY.COILY</h2>
          <p className="text-3xl font-semibold text-purple-600 mb-4">
            .LOC'D.WAVY...
          </p>
          <p className="text-2xl font-bold text-pink-600 mb-6">
            SOMETHING FOR EVERY HAIR TYPE!
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect products for your unique hair journey. From kinky to coily, 
            curly to wavy, loc'd to natural - we celebrate every texture and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hairProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 overflow-hidden group"
            >
              {/* Product Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Hair Type Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {product.hairType.map((type, index) => (
                    <span 
                      key={index}
                      className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                  {product.category}
                </div>
              </div>

              {/* Product Info Section */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="font-bold text-base mb-2 text-gray-800 leading-tight line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-purple-600">
                    ₵{product.price.toFixed(2)}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.outOfStock}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                    product.outOfStock
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {product.outOfStock ? 'Out of Stock' : 'Add to cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-2xl transform hover:scale-105">
            SHOP ALL HAIR PRODUCTS
          </button>
        </div>

        {/* Hair Types Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌀</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Kinky</h4>
            <p className="text-gray-600 text-sm">
              Tight coils with maximum shrinkage and density
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-pink-100">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Coily</h4>
            <p className="text-gray-600 text-sm">
              Springy S-shaped coils with great definition
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Curly</h4>
            <p className="text-gray-600 text-sm">
              Defined ringlets and spiral patterns
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h4 className="font-bold text-lg mb-2 text-gray-800">Wavy</h4>
            <p className="text-gray-600 text-sm">
              Soft S-shaped waves with gentle movement
            </p>
          </div>
        </div>

        {/* Specialized Care Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white shadow-2xl">
            <h4 className="font-bold text-lg mb-2">Locs & Braids</h4>
            <p className="text-sm opacity-90">
              Specialized products for protective styles and loc maintenance
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl text-white shadow-2xl">
            <h4 className="font-bold text-lg mb-2">Natural Hair</h4>
            <p className="text-sm opacity-90">
              Gentle formulas for chemical-free, natural hair journeys
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-2xl text-white shadow-2xl">
            <h4 className="font-bold text-lg mb-2">Damaged Hair</h4>
            <p className="text-sm opacity-90">
              Repair and restore treatments for stressed and damaged hair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}