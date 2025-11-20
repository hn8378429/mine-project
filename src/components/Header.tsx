"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();

  const [hairOpen, setHairOpen] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const hairItems: string[] = [
    "Shampoos & Co-wash",
    "Conditioners & Treatments",
    "Leave-in Products",
    "Stylers & Curl Definers",
    "Moisturisers",
    "Oils, Butters & Serums",
    "Hair Tools & Accessories",
    "Ayurvedic & Natural Products",
    "Hair Supplements & Growth Aids",
    "Relaxers",
  ];

  const skinItems: string[] = [
    "Bath & Body",
    "Acne Care",
    "Exfoliants",
    "Eye & Lip Care",
    "Facial Cleansers & Toners",
    "Moisturisers",
    "Scrubs & Masks",
    "Sunscreen",
    "Serums",
    "Tools",
  ];

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  const filteredHair = search
    ? hairItems.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    : hairItems;

  const filteredSkin = search
    ? skinItems.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    : skinItems;

  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setHairOpen(false);
      setSkinOpen(false);
    }
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setHairOpen(false);
      setSkinOpen(false);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setHairOpen(false);
    setSkinOpen(false);
  };

  return (
    <header className={`bg-white w-full top-0 z-50 transition-shadow duration-300 ${isSticky ? "shadow-md fixed" : "relative"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://urbanmakes.com/wp-content/uploads/2019/02/urbanmakes-logo-300x134.png"
            alt="UrbanMakes Logo"
            width={150}
            height={68}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {/* Hair Dropdown */}
          <div className="relative">
            <button
              onClick={() => setHairOpen(!hairOpen)}
              className="flex items-center text-gray-800 hover:text-pink-500 focus:outline-none"
            >
              Hair <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {hairOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border shadow-lg rounded z-20">
                {filteredHair.map((item) => (
                  <Link
                    key={item}
                    href={`/shop/hair/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                    onClick={() => setHairOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Skin Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSkinOpen(!skinOpen)}
              className="flex items-center text-gray-800 hover:text-pink-500 focus:outline-none"
            >
              Skin <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {skinOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border shadow-lg rounded z-20">
                {filteredSkin.map((item) => (
                  <Link
                    key={item}
                    href={`/shop/skin/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                    onClick={() => setSkinOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            "Health & Wellness",
            "Fragrance",
            "Kids",
            "Men",
            "Bundles",
            "Sale",
            "My UM",
          ].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-800 hover:text-pink-500"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-8 pr-2 py-1 border rounded w-36 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {search.trim() !== "" && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border shadow-lg rounded z-20 max-h-60 overflow-y-auto">
                {filteredHair.concat(filteredSkin).map((item) => (
                  <Link
                    key={item}
                    href={`/shop/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-500"
                    onClick={() => setSearch("")}
                  >
                    {item}
                  </Link>
                ))}
                {filteredHair.concat(filteredSkin).length === 0 && (
                  <div className="px-4 py-2 text-gray-400">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link href="/wishlist" className="relative">
            <HeartIcon className="h-6 w-6 text-gray-800 hover:text-pink-500" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-800 hover:text-pink-500" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-pink-500 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg z-10">
          {/* Hair */}
          <div className="border-b">
            <button
              onClick={() => setHairOpen(!hairOpen)}
              className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-pink-50 hover:text-pink-500"
            >
              <span>Hair</span>
              <ChevronDownIcon 
                className={`h-4 w-4 transition-transform duration-200 ${
                  hairOpen ? "rotate-180" : ""
                }`} 
              />
            </button>
            {hairOpen && (
              <div className="bg-gray-50 border-t">
                {filteredHair.map((item) => (
                  <Link
                    key={item}
                    href={`/shop/hair/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 border-b border-gray-100"
                    onClick={handleMobileLinkClick}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Skin */}
          <div className="border-b">
            <button
              onClick={() => setSkinOpen(!skinOpen)}
              className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-800 hover:bg-pink-50 hover:text-pink-500"
            >
              <span>Skin</span>
              <ChevronDownIcon 
                className={`h-4 w-4 transition-transform duration-200 ${
                  skinOpen ? "rotate-180" : ""
                }`} 
              />
            </button>
            {skinOpen && (
              <div className="bg-gray-50 border-t">
                {filteredSkin.map((item) => (
                  <Link
                    key={item}
                    href={`/shop/skin/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 border-b border-gray-100"
                    onClick={handleMobileLinkClick}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            "Health & Wellness",
            "Fragrance",
            "Kids",
            "Men",
            "Bundles",
            "Sale",
            "My UM",
          ].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-3 text-gray-800 hover:bg-pink-50 hover:text-pink-500 border-b border-gray-100"
              onClick={handleMobileLinkClick}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}