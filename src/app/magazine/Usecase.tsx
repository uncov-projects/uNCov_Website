"use client";

import React from "react";

export default function WhyChooseVantage() {
  const reasons = [
    {
      title: "CREATIVE EXCELLENCE",
      description:
        "We take pride in pushing creative boundaries to deliver solutions that are both innovative and aesthetically pleasing.",
    },
    {
      title: "COLLABORATIVE APPROACH",
      description:
        "Your vision is our inspiration. We collaborate closely with you throughout the process to ensure that the final product aligns perfectly.",
    },
    {
      title: "CUTTING-EDGE TECHNOLOGY",
      description:
        "We stay ahead of industry trends and leverage the latest technologies to provide you with modern, future-proof solutions.",
    },
    {
      title: "CLIENT SATISFACTION",
      description:
        "Our success is measured by your satisfaction. We are committed to delivering projects on time and exceeding your expectations.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* ===== LEFT SIDE ===== */}
        <div>
          {/* Video Section */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 text-sm">
              ▶
            </span>
            <p className="text-gray-700 text-sm font-medium">
              See how we works
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black mb-6">
            WHY CHOOSE <br />
            <span className="text-purple-500">→</span> VANTAGE
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
            Our team of creative minds is dedicated to delivering unique and
            visually stunning solutions tailored to meet your specific needs.
            Explore our array of services and discover how we can bring your
            ideas to life.
          </p>

          {/* CTA Button */}
          <button className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
            Get Started
          </button>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="space-y-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-purple-500 font-bold">
                →
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
