"use client";

import React from "react";
import Image from "next/image";

export default function TopNotchServices() {
  const services = [
    {
      title: "Web Design",
      description:
        "Your website is your virtual storefront, and first impressions matter. Our web design experts craft visually appealing, user-friendly, and responsive websites that seamlessly adapt to various devices.",
    },
    {
      title: "Graphic Design",
      description:
        "Stand out from the crowd with our bespoke graphic design services. From eye-catching logos to engaging marketing materials, our team turns concepts into captivating visuals.",
    },
    {
      title: "Motion Graphic",
      description:
        "Bring your brand to life with dynamic and attention-grabbing motion graphics. Our talented animators and motion graphic designers transform static ideas into captivating animations that convey your message effectively.",
    },
    {
      title: "Illustration",
      description:
        "Illustrations have the power to tell stories and evoke emotions. Our illustrators breathe life into your ideas, creating custom illustrations that complement your brand style. Whether it’s for digital or print media.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ===== LEFT SECTION ===== */}
        <div className="space-y-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-sm font-bold text-gray-600">
                ↻
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black mb-8">
            SPECIALIZE <br /> IN PROVIDING <br />
            TOP <span className="text-purple-500">→</span> NOTCH <br /> SERVICES
          </h2>

          {/* Sub description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our team of creative minds is dedicated to delivering unique and
            visually stunning solutions tailored to meet your specific needs.
          </p>

          {/* Video Preview */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md mb-8">
            <div className="flex items-center justify-center h-40 md:h-56 bg-gray-200">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow text-lg">
                ▶
              </span>
            </div>
          </div>

          {/* Mockup Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/mockup.png"
              alt="Mockup"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
