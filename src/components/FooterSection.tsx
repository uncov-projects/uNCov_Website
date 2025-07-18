import React from "react";

const FooterSection: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Top CTA Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 bg-[#D9FF00] rounded-b-[100px]">
        {/* Left Text */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-black">
            Understand your <br /> cashflow business
          </h2>
        </div>

        {/* Right Text + Button */}
        <div className="text-black mt-10 lg:mt-0 w-full lg:w-1/2 text-center lg:text-right">
          <p className="max-w-md mx-auto lg:mx-0">
            Mattis ante vel malesuada vestibulum sed. Ac velit eget dis nunc
            vulputate felis. Aliquam dictumst.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#6236FF] text-white rounded-full font-semibold hover:bg-[#4b2fcc] transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            {/* You can insert a logo SVG or icon here */}
            <span className="text-white">🌐</span> Uncov
          </h3>
          <p className="text-sm text-gray-400">
            Convallis in eget tristique faucibus sollicitudin convallis in sit
            tristique. Nisi sed faucibus tellus morbi sodales convallis sem.
            Ultrices eu lectus lacinia id augue sit.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Service</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Talent Search</li>
            <li>Management</li>
            <li>Investor</li>
            <li>Media</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Press Release</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Subscribe To Newsletter
          </h4>
          <div className="flex items-center bg-[#1A1A1A] rounded-full overflow-hidden w-full max-w-xs">
            <input
              type="text"
              placeholder="Your email here"
              className="flex-1 px-4 py-2 text-sm text-white bg-transparent outline-none"
            />
            <button className="bg-[#D9FF00] text-black px-4 py-2 rounded-full">
              →
            </button>
          </div>
          <div className="flex gap-4 mt-4 text-lg text-gray-400">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-800 text-sm text-gray-500">
        © Copyright 2023. All rights reserved.
      </div>
    </div>
  );
};

export default FooterSection;
