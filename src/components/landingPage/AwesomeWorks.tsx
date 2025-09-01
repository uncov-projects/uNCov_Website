"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AwesomeWorks() {
  const works = [
    {
      title: "BETELY AGENCY",
      desc: "Branding Design, UI/UX Design",
      gif: "/images/step1.gif",
    },
    {
      title: "GROWTHY",
      desc: "Finance, UI/UX, Website Design",
      gif: "/images/step2.gif",
    },
    {
      title: "ALPINANCE",
      desc: "Finance, UI/UX, App Design",
      gif: "/images/step3.gif",
    },
  ];

  return (
    <section className="w-full bg-[#f7f5f5] py-24 px-6 md:px-16 lg:px-24 font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <span className="flex items-center gap-3 text-sm font-medium text-gray-700">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 shadow-sm bg-white animate-pulse">
              ▶
            </span>
            See Our Portfolios Reels
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F0F0F] leading-tight tracking-tight">
            AWESOME <br />
            <span className="inline-flex items-center gap-3">
              <span className="text-purple-500 text-6xl">→</span>
              WORKS
            </span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="max-w-sm text-gray-600 flex flex-col gap-6 leading-relaxed">
          <p className="text-base md:text-lg">
            Each project in our portfolio is a testament to our commitment to{" "}
            <span className="font-semibold text-black">creativity</span>,{" "}
            <span className="font-semibold text-black">innovation</span>, and{" "}
            <span className="font-semibold text-black">excellence</span>.
          </p>
          <button className="px-6 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md">
            Get Started
          </button>
        </div>
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {works.map((work, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* GIF */}
            <div className="relative w-full h-72">
              <Image
                src={work.gif}
                alt={work.title}
                fill
                unoptimized // 👈 required for GIFs
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-black tracking-tight group-hover:text-purple-500 transition-colors">
                  {work.title}
                </h3>
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 group-hover:bg--500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowRight size={20} />
                </span>
              </div>
              <p className="text-gray-500 text-sm md:text-base">{work.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
