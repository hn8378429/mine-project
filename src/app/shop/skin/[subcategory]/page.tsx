"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

// Sample products for skin categories
const allProducts: Record<
  string,
  { id: number; name: string; price: string; image: string }[]
> = {
  "bath-&-body": [
    {
      id: 1,
      name: "Ambi Complexion Cleansing Bar, 99g / 3.5 oz",
      price: "$12.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/61swuC14IEL._SL1000_-250x250.jpg",
    },
    {
      id: 2,
      name: "Dove Deep Moisture Body Wash, 500ml",
      price: "$8.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/face-facts-strawberry-fizz-lotion-800x800-1-250x250.png",
    },
  ],
  "acne-care": [
    {
      id: 1,
      name: "CeraVe Resurfacing Retinol Serum, 30 ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/retinol-packshot-with-carton-desktop-700x785-v1-250x250.webp",
    },
    {
      id: 2,
      name: "PanOxyl Acne Creamy Wash Benzoyl Peroxide 4%, Daily Control",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/11/darf.jpg-250x250.webp",
    },
    {
      id: 3,
      name: "Neutrogena Oil-Free Acne Wash. 9.1 oz / 269 ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/71MRpu3vNAL-250x250.jpg",
    },
    {
      id: 4,
      name: "Some By Mi AHA-BHA-PHA 30Days Miracle Toner, 150ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/SBM_AHABHAPHAToner_Main_1400x.jpg-250x250.webp",
    },
    {
      id: 5,
      name: "La Roche-Posay Mela B3 Dark Spot Serum w/ MELASYL™ Niacinamide, 30ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/IMG_2306-250x250.png",
    },
  ],
  "exfoliants": [
    {
      id: 1,
      name: "Medicube Zero Pore One Day Serum, 30ml",
      price: "$29.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/71hTtgk7qVL._SL1500_-250x250.jpg",
    },
    {
      id: 2,
      name: "Clinique Clarifying Lotion 3 Combination-Oily, 400ml",
      price: "$29.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/images-250x250.jpg",
    },
    {
      id: 3,
      name: "Clinique Clarifying Lotion 4 Oily, 400ml",
      price: "$29.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/07/11144353-2145231031478665-250x250.jpg",
    },
  ],
  "eye-&-lip-care": [
    {
      id: 1,
      name: "Urban Skin Rx Dark Circle Vitaleyez Treatment, 15ml",
      price: "$32.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/2023.11_USRx_Vitaleyez_PDP_1600x1600px_72ppi_4433baa5-6a2d-4c33-916b-3598ba96f651.jpg-250x250.webp",
    },
    {
      id: 2,
      name: "Some By Mi V10 Hyal Lip Sun Protector SPF15, Berry",
      price: "$32.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/02/IMG_9646-1.jpeg",
    },
    {
      id: 3,
      name: "Mini Brow / Lash Spoolies, Pack of 10",
      price: "$32.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/06/IMG_6188-250x250.jpeg",
    },
  ],
  "facial-cleansers-&-toners": [
    {
      id: 1,
      name: "SKIN1004 Madagascar Centella Toning Toner, 210ml",
      price: "$19.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/11/skin1004-toner-centella-toning-toner-38642837750006_1440x.png-250x250.webp",
    },
    {
      id: 2,
      name: "SKIN1004 Madagascar Centella Ampoule Foam, 125ml",
      price: "$17.49",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/11/skin1004-cleanser-centella-ampoule-foam-38642819825910_1440x.png-250x250.webp",
    },
  ],
  moisturisers: [
    {
      id: 1,
      name: "Medicube TXA Niacinamide Capsule Cream, 55g",
      price: "$13.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/4704-250x250.jpg",
    },
  ],
  "scrubs-&-masks": [
    {
      id: 1,
      name: "Some By Mi Galactomyces Glutathione Daily Mask, 30 Pcs",
      price: "$23.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/some-by-mi-galactomyces-glutathione-daily-mask-63803129201023.jpg-250x250.webp",
    },
    {
      id: 2,
      name: "Medicube Collagen Night Wrapping Mask, 75ml",
      price: "$23.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/61occWCJN-L._SL1500_-250x250.jpg",
    },
    {
      id: 3,
      name: "Medicube Kojic Acid Turmeric Night Wrapping Mask, 75ml",
      price: "$23.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/61GzPp88rGL._SL1500_-250x250.jpg",
    },
  ],
  sunscreen: [
    {
      id: 1,
      name: "APLB Glutathione Niacinamide Sunscreen SPF 50+ PA++++, 40ml",
      price: "$25.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/4041-250x250.jpg",
    },
  ],
  serums: [
    {
      id: 1,
      name: "Medicube Collagen Glow Booster Serum, 15ml",
      price: "$11.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/51wb6gg04rL._SL1500_-250x250.jpg",
    },
    {
      id: 2,
      name: "Anua Azelaic Acid 10 Hyaluron Redness Soothing Serum",
      price: "$11.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/10/51nR7ndiTZL._AC_UL900_SR615900_-250x250.jpg",
    },
    {
      id: 3,
      name: "Medicube One Day Exosome Shot Pore Ampoule 2000, 30ml",
      price: "$11.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/71si-02TT-L-250x250.jpg",
    },
  ],
  tools: [
    {
      id: 1,
      name: "Nature Spell Cleanse & Exfoliate Silicone Body Brush",
      price: "$12.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/09/NS_Cleanse_ExfoliateBodyBrush_Accessory_Packshot_Box.jpg-250x250.webp",
    },
    {
      id: 2,
      name: "Medicube Age-R Booster Pro EX, Pink",
      price: "$8.99",
      image:
        "https://urbanmakes.com/wp-content/uploads/2025/08/Product-page-sizes-_pink_22aea8c9-ef0f-4840-b6e3-67ffecd785e1.jpg-250x250.webp",
    },
  ],
};

export default function SkinSubcategoryPage() {
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
