"use client";

import React from "react";

export default function CreateInnovation() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-sans border-t border-gray-200">
      <div className="text-center md:text-left">
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black tracking-tight mb-8">
          <span className="text-purple-500">→</span> CREATE{" "}
          <span className="text-purple-500">*</span> NEW <br />
          INNOVATION <span className="text-purple-500">→</span> TOGETHER
        </h2>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-300 pt-6">
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Our team of talented designers thrives on pushing the boundaries of
            creativity, ensuring that your project stands out and makes an
            impact.
          </p>

          <button className="flex items-center justify-center px-8 py-3 rounded-full border border-black text-black text-sm md:text-base font-medium hover:bg-black hover:text-white transition">
            CONTACT US <span className="ml-2 text-purple-500">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
