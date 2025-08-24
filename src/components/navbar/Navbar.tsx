"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-[0_4px_32px_0_rgba(100,87,225,0.07)] px-[4vw] py-4 font-inter">
      <div className="flex items-center justify-between">
        {/* Left Section (Logo + Label) */}
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-[#876CFF] to-[#5C57CB] rounded-[13px] w-[34px] h-[34px] flex items-center justify-center">
            <span className="text-white font-bold text-xl">✦</span>
          </div>
          <span className="text-[#232040] font-medium text-[1.05rem]">
            uNCov
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {["Community", "Features", "Pricing"].map((text) => (
            <Link
              key={text}
              href="#"
              className="px-5 py-2 rounded-xl bg-[#F7F7FE] text-[#231F37] font-medium text-base transition-colors hover:bg-[#E2E2FB]"
            >
              {text}
            </Link>
          ))}

          <Link
            href="#"
            className="ml-1 px-6 py-2 rounded-xl bg-gradient-to-r from-[#A48FFB] to-[#7766F5] text-white font-semibold text-base shadow-[0_1px_16px_0_rgba(131,112,254,0.13)] tracking-wide transition-all hover:brightness-105"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#232040]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-4 animate-slideDown">
          {["Community", "Features", "Pricing"].map((text) => (
            <Link
              key={text}
              href="#"
              className="px-4 py-2 rounded-lg text-[#231F37] font-medium text-base bg-[#F7F7FE] hover:bg-[#E2E2FB] transition-colors"
            >
              {text}
            </Link>
          ))}

          <Link
            href="#"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#A48FFB] to-[#7766F5] text-white font-semibold text-base shadow-md text-center"
          >
            Get started
          </Link>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
