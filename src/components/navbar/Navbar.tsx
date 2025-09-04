"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-inter">
      {/* 🔹 Top Strip */}
      <div className="bg-[#695CFE] text-white text-sm px-6 py-2 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">🌍 IND</span>
          <span>+91 72345 7886</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-gray-200">My Account</Link>
          <Link href="#" className="hover:text-gray-200">Wish List</Link>
          <Link href="#" className="hover:text-gray-200">Shopping</Link>
          <Link href="#" className="hover:text-gray-200">Cart</Link>
          <Link href="#" className="hover:text-gray-200">Checkout</Link>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="bg-white/70 backdrop-blur-xl shadow-md px-[5vw] py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-[#695CFE] rounded-xl w-[40px] h-[40px] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">✦</span>
            </div>
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
              UnCov.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Community", "Latest", "Blog", "Pages", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="relative text-gray-700 font-medium hover:text-[#695CFE] transition group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#695CFE] transition-all group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm hover:shadow-md transition">
              <input
                type="text"
                placeholder="Search products..."
                className="text-sm px-2 py-1 outline-none bg-transparent w-40"
              />
              <Search className="w-4 h-4 text-gray-500" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition">
                <Heart className="w-5 h-5 text-gray-600" />
              </div>
              <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-[#695CFE] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                  2
                </span>
              </div>
            </div>

            {/* Sign In */}
            <Link
              href="#"
              className="px-5 py-2 bg-[#695CFE] text-white rounded-full font-semibold hover:shadow-md hover:scale-105 transition transform"
            >
              Sign In
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-5 border border-gray-200 animate-slideDown">
            {["Home", "Community", "Latest", "Blog", "Pages", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="px-4 py-2 rounded-lg text-gray-700 font-medium text-base hover:bg-gray-100 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href="#"
              className="px-4 py-2 rounded-full bg-[#695CFE] text-white font-semibold text-base shadow-md text-center"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
