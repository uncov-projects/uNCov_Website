"use client";

import React from "react";
import Image from "next/image";

export default function DrivingDigital() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-16 lg:px-24 font-sans">
      {/* ===== Heading Section ===== */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0F0F0F] space-y-4">
          <div>
            DRIVING <span className="text-purple-500">→</span> DIGITAL
          </div>
          <div>
            <span className="text-purple-500">→</span> SUCCESS{" "}
            <span className="text-purple-500">*</span> TOGETHER
          </div>
        </h2>
      </div>

      {/* ===== Grid Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition">
          <div>
            <h3 className="text-5xl font-extrabold text-black">350+</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Your trusted partner for all things digital. Let’s transform your
              online presence.
            </p>
            <p className="italic font-medium mt-4 text-black">
              Captivate, Engage, and Inspire.
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/images/work3.jpg"
              alt="Example"
              width={500}
              height={300}
              className="rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-xl transition">
            <p className="text-gray-700 mb-6">
              Your trusted partner for all things digital. Let’s transform your
              online presence.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 rounded-full bg-purple-500 text-white font-medium hover:bg-purple-600 transition">
                Contact Us
              </button>
              <button className="px-6 py-2 rounded-full border border-purple-400 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition">
                Book Meeting
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition">
            <span className="flex items-center gap-3 text-sm font-medium text-gray-700 mb-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                ▶
              </span>
              See how it works
            </span>
            <h3 className="text-4xl font-extrabold text-black">40+</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Our team of talented designers thrives on pushing the boundaries
              of creativity, ensuring that your project stands out and makes an
              impact.
            </p>
            {/* Avatars */}
            <div className="flex mt-4">
              {[1, 2, 3, 4].map((id) => (
                <Image
                  key={id}
                  src={`/images/avatar${id}.jpg`}
                  alt="team"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white -ml-2 first:ml-0"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition">
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-500 mb-3">
              Our Services
            </h4>
            <p className="text-gray-600 leading-relaxed">
              We are committed to transparency, innovation, and delivering
              outstanding value to our clients.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Expertise In</h3>
            <div className="flex flex-wrap gap-3">
              {["Web Design", "Graphic Design", "Motion Graphic", "Illustration"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border text-sm font-medium text-gray-700 hover:bg-purple-500 hover:text-white transition"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
