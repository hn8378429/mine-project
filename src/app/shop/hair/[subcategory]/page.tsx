"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const allProducts: Record<
  string,
  { id: number; name: string; price: string; image: string }[]
> = {
  "shampoos-&-co-wash": [
    {
      id: 1,
      name: "ORS Olive Oil Professional Neutralizing Shampoo, 1 ltr",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/medium_436a578a-5981-47ba-98a0-1d297867fba6_1000x.jpg-250x250.webp",
    },
    {
      id: 2,
      name: "Affirm Scalp Therapy Shampoo, 950ml / 32 oz",
      price: "$24.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/IMG_0025-250x250.jpeg",
    },
    {
      id: 3,
      name: "Sunny Isle Kids Care Extreme Hydrating Shampoo, 12oz ",
      price: "$29.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/61w6Lj0e0cL._UF8941000_QL80_-250x250.jpg",
    },
    {
      id: 4,
      name: "Shimmer Lights Purple Shampoo for Blonde & Silver Hair, 8 oz",
      price: "$14.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/617LkLlhSOL._SL1500_-250x250.jpg",
    },
    {
      id: 5,
      name: "Olaplex Nº.4D Clean Volume Detox Dry Shampoo, 178g / 6.3oz",
      price: "$21.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/09/3010_4D_Allure_PDP-Ecomm_2000x2000_1440x_c0909727-7fc0-413f-abce-414217019f18_1440x.webp-250x250.png",
    },
    {
      id: 6,
      name: "Olaplex Nº.4C Bond Maintenance® Clarifying Shampoo, 250ml / 8.5oz",
      price: "$17.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/09/1-N4C_product_1440_900ba134-133f-4f36-9fd1-3cb0ec10a45f.png-250x250.webp",
    },
    {
      id: 7,
      name: "Alkmene My Tea Tree Oil Anti-Dandruff Shampoo, 200 ml",
      price: "$23.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/2022_07_255_alkmene_MTBOe_Amazon_Bilder_AntiSchuppenShampoo_200ml_Bild1_EN.jpg",
    },
    {
      id: 8,
      name: "The Doux One Love Co-Wash™ , 16oz",
      price: "$26.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/The-Doux-One-Love-Go-Wash-Super-Slip-Conditioning-Cleanser-16-fl-oz-437-8-ml_d012003a-64fb-4c3c-8c20-0bb6a7358089.60af843017913f911e17d94d429e9b0c.jpeg-250x250.webp",
    },
    {
      id: 9,
      name: "As I Am Rosemary Shampoo, 8 oz / 237 ml",
      price: "$20.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/04/IMG_4340-250x250.webp",
    },
  ],

  // Example: next subcategory
  "conditioners-&-treatments": [
    {
      id: 1,
      name: "Creme of Nature PH Intense Hydration Treatment Hair Mask",
      price: "$22.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/64b86f2735317718d24c96f7-cream-of-nature-pure-honey-yogurt-250x250.jpg",
    },
    {
      id: 2,
      name: "ApHogee Balancing Moisturizer, 237ml / 8 oz.",
      price: "$27.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/ApHogee-Balancing-Moisturizer-8-Oz-BEAUTY-TALK-LA_7a667887-95de-46c4-8d23-5af8242f4956.879acf01636587d6132f7b4883086493.jpeg-250x250.webp",
    },
  ],

  "leave-in-products": [
    {
      id: 1,
      name: "Creme of Nature Perfect 7 Leave In Treatment, 4.23oz",
      price: "$18.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/71GCBex38L._SL1500_-250x250.jpg",
    },
  
    {
      id: 2,
      name: "Taliah Waajid Curls, Waves & Naturals Curl Sealer, 6oz",
      price: "$18.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/Curl-Sealer-6oz_Front-min_1f3dbcb3-fd63-4a66-a805-924b301abf24.jpg-250x250.webp",
    },
  
    {
      id: 3,
      name: "Taliah Waajid Curls, Waves & Naturals Curl Sealer, 6oz",
      price: "$18.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/Curl-Sealer-6oz_Front-min_1f3dbcb3-fd63-4a66-a805-924b301abf24.jpg-250x250.webp",
    },
  ],

  "stylers-&-curl-definers": [
    {
      id: 1,
      name: "EBIN Braid Formula Anti-Tension Gel (Minty) – Super Hold, 180ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/71EZzY2YeZL-250x250.jpg",
    },
  
    {
      id: 2,
      name: "TRESemmé Extra Hold Hairspray, 400ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/unnamed-file-250x250.jpg",
    },
  ],

  "moisturisers": [
    {
      id: 1,
      name: "Aunt Jackie’s Oh So Strong! Shine Boosting Moisturizer, 12 oz",
      price: "$15.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2024/11/IMG_7005-250x250.jpeg",
    },
    {
      id: 2,
      name: "KeraCare Conditioning Creme Hairdress, 8 oz / 227g",
      price: "$15.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/01/IMG_8906-250x250.webp",
    },
    {
      id: 3,
      name: "Curly Chic Your Curls Refreshed, 12 oz",
      price: "$15.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2024/11/IMG_7014-250x250.webp",
    },
  ],

  "oils,-butters-&-serums": [
    {
      id: 1,
      name: "Affirm ProGrowth Oil, 2 oz / 60ml",
      price: "$30.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/Avlon-AC-Progrowth-Oil-Rosemary-box-bottle-web.png.webp",
    },
  ],

  "hair-tools-&-accessories": [
    {
      id: 1,
      name: "Annie Wet & Dry Detangling Hair Brush, Black",
      price: "$30.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/09/2488assortment.png-250x250.webp ",
    },
    {
      id: 2,
      name: "PrimeX Premium Horsehair Wooden Soft Beard Brush",
      price: "$30.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/09/annie-2871-1-250x250.jpg ",
    },
    {
      id: 3,
      name: "PrimeX Twist & Pik Comb",
      price: "$30.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/09/PrimexTwistandPikCombMain.webp-250x250.jpeg ",
    },
  ],

  "ayurvedic-&-natural-products": [
    {
      id: 1,
      name: "Sunny Isle Extreme Hydrating Conditioner",
      price: "$25.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2023/11/IMG_3621-250x250.jpeg",
    },
    {
      id: 2,
      name: "NOW Solutions Grapeseed Oil – 16 oz.",
      price: "$25.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2023/06/IMG_7067-1-250x250.jpeg",
    },
  ],

  "hair-supplements-&-growth-aids": [
    {
      id: 1,
      name: "The Ordinary DensityMulti-Peptide Serum for Hair Density, 60ml",
      price: "$28.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/05/IMG_5610-250x250.webp",
    },
    {
      id: 2,
      name: "Blossity Scalp Massage Brush (Manual)",
      price: "$28.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/05/blossity-388x388.webp",
    },
    {
      id: 3,
      name: "XHC Rosemary & Mint Hair Oil, 60ml / 2.02 oz",
      price: "$28.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2024/10/IMG_5701-250x250.webp",
    },
  ],

  "relaxers": [
    {
      id: 1,
      name: "Just For Men Mustache & Beard Dye, Real Black",
      price: "$22.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/Just-For-Men-Mustache-Beard-Coloring-for-Gray-Hair-M55-Real-Black_c63418b0-194c-4da6-bfef-703fbea1b8c2.e5ae206acd1d69f4b1ca5572fade8b71.jpeg-250x250.webp",
    },
    {
      id: 2,
      name: "Revlon ColorSilk Ultra Light Natural Blonde",
      price: "$22.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2023/09/IMG_0862-scaled-250x250.webp",
    },
    {
      id: 3,
      name: "Just For Men Mustache & Beard Dye, Real Black",
      price: "$22.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2024/05/IMG_0120-250x250.gif",
    },
    {
      id: 4,
      name: "Creme of Nature Pure Honey Hydrating Color Boost Semi-Permanent Hair Color – Light Golden Copper",
      price: "$22.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2022/07/C226FBE2-292F-432F-8001-293C1F5959BE-250x250.jpeg",
    },
  ],
};

export default function HairSubcategoryPage() {
  const params = useParams();
  const subcategory = decodeURIComponent(params.subcategory as string);

  const products = allProducts[subcategory] || [];

  const { addToCart } = useCart();
const { toggleWishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">
        {subcategory.replace(/-/g, " ")}
      </h1>
      <p className="text-gray-600 mb-6">
        Browse all products under {subcategory.replace(/-/g, " ")}.
      </p>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded p-4 flex flex-col items-center relative"
            >
              {/* Wishlist Icon */}
              <button
  className="absolute top-3 right-3 text-gray-400 hover:text-pink-500"
  onClick={() =>
    toggleWishlist({
      id: String(product.id),
      title: product.name,
      image: product.image,
      price: parseFloat(product.price.replace("$", "")),
    })
  }
>
  <FaHeart size={20} />
</button>


              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={250}
                className="object-contain mb-4"
              />

              <h2 className="font-medium mb-2 text-center">{product.name}</h2>
              <p className="text-pink-500 font-semibold mb-2">{product.price}</p>

              {/* ADD TO CART */}
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full"
                onClick={() =>
                  addToCart({
                    id: String(product.id),
                    title: product.name,
                    image: product.image,
                    price: parseFloat(product.price.replace("$", "")),
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}