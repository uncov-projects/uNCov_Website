"use client";

import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import Image from "next/image";

const HeroContent: React.FC = () => {
  const images = [
    { src: "/images/step1.webp", alt: "Image 1" },
    { src: "/images/step2.webp", alt: "Image 2" },
    { src: "/images/step3.webp", alt: "Image 3" },
  ];

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between w-full min-h-[650px] px-[5vw] py-10 lg:py-20 overflow-hidden rounded-[32px] ">
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#A48FFB]/40 to-[#7766F5]/30 blur-[120px] rounded-full opacity-60 z-0" />

      {/* LEFT SIDE */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center pr-8 text-center lg:text-left space-y-6 animate-fadeInUp">
        {/* Headline */}
        <h1 className="font-extrabold text-[3.6rem] leading-[1.1] text-[#131230] tracking-[-0.02em] drop-shadow-sm">
          Empowering <br />
          Education with <br />
          <span className="bg-gradient-to-r from-[#876CFF] via-[#7B6CFF] to-[#5C57CB] bg-clip-text text-transparent">
            Technology
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg leading-relaxed text-[#555a6c] font-medium tracking-wide max-w-lg mx-auto lg:mx-0">
          Our EdTech platform is a <span className="font-semibold text-[#131230]">comprehensive solution</span> that leverages modern tools to enhance learning experiences for{" "}
          <span className="text-[#131230] font-semibold">educators</span> and{" "}
          <span className="text-[#131230] font-semibold">students</span>.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center lg:justify-start text-white">
          <button className="relative bg-gradient-to-r from-[#876CFF] to-[#5C57CB] text-white font-semibold text-lg rounded-[32px] px-10 py-4 shadow-[0_6px_25px_rgba(115,104,240,0.35)] transition-transform hover:scale-105 hover:shadow-[0_8px_32px_rgba(115,104,240,0.45)]">
             Get Started →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - AntD Carousel */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-end mt-10 lg:mt-0 animate-fadeIn">
        <Carousel
          autoplay
          autoplaySpeed={4000}
          effect="fade"
          dots={{ className: "custom-dots" }}
          className="w-[90%] max-w-[580px] h-[600px] rounded-3xl shadow-2xl overflow-hidden"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[600px] aspect-[16/9] group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />
            </div>
          ))}
        </Carousel>
      </div>

    </section>
  );
};

export default HeroContent;
