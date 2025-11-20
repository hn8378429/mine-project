"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">Emma Store</h1>
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="text-sm">
        Cart:{" "}
        <span className="font-semibold">
          {cart.reduce((sum, item) => sum + (item.quantity || 0), 0)}

        </span>
      </div>
    </header>
  );
}
