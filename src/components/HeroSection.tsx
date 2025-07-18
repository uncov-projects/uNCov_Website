import React from "react";
import AnimatedText from "./AnimatedText";
const HeroSection: React.FC = () => (
  <section className="bg-[#fdf7f2] w-full h-screen relative overflow-hidden">
    {/* Navbar */}
    <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <img src="/public/Logo.png" alt="uncov Logo" className="w-8 h-8" />
        <span className="text-lg font-semibold">Uncov</span>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        <a href="#">Product</a>
        <a href="#">Service</a>
        <a href="#">Customers</a>
        <a href="#">Resource</a>
      </nav>
      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
        {/* <span className="text-white text-lg">👑</span> */}
      </div>
    </header>

    {/* Hero Title */}
    <section className="h-screen bg-[#fdf7f2] flex items-center justify-center text-center px-4">
      <div>
        <AnimatedText
          text="Enjoy A Smooth"
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        />
        <br />
        <AnimatedText
          text="Pleasant Relocation"
          className="text-4xl md:text-6xl font-extrabold text-purple-700 mt-2"
          delay={0.08}
        />
      </div>
    </section>

    {/* Main Visual + Decorations */}
    <div className="absolute inset-0">
      <div className="relative flex items-center justify-center h-full">
        

        {/* Hero Image With Purple Backdrop */}
        {/* <div className="relative z-10">
          <div className="w-[280px] h-[380px] bg-[#693bff] absolute top-8 left-8 z-0 rounded-md"></div>
          <img
            src="/Hero.png"
            alt="Person"
            className="relative w-[280px] h-[380px] object-cover z-10"
          />
        </div> */}

        {/* Right Dot & Dotted Line */}
       
      </div>
    </div>
  </section>
);

export default HeroSection;
