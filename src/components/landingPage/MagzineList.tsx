"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const magazines = [
  {
    id: "tech-future",
    title: "Tech Future",
    description: "Exploring the next wave of innovations shaping tomorrow.",
    media: "/images/step1.gif", 
  },
  {
    id: "design-trends",
    title: "Design Trends",
    description: "Unveiling the latest in modern creative design culture.",
    media: "/images/step2.gif",
  },
  {
    id: "business-insights",
    title: "Business Insights",
    description: "Strategies and stories that drive successful ventures.",
    media: "/images/step3.gif",
  },
  {
    id: "health-today",
    title: "Health Today",
    description: "Your guide to wellness, nutrition, and fitness practices.",
    media: "/images/mag4.jpg",
  },
  {
    id: "travelogue",
    title: "Travelogue",
    description: "Discover hidden gems and cultural adventures worldwide.",
    media: "/images/mag5.jpg",
  },
  {
    id: "lifestyle-hub",
    title: "Lifestyle Hub",
    description: "Trends, style, and inspirations for modern living.",
    media: "/images/mag6.jpg",
  },
];

export default function MagzineList() {
  return (
    <section className="p-6 md:p-12 lg:p-16 bg-gray-50 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
        Featured Magazines
      </h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {magazines.map((mag) => (
          <div
            key={mag.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
          >
            {/* Media (jpg / gif both work) */}
            <div className="relative w-full h-56">
              <Image
                src={mag.media}
                alt={mag.title}
                fill
                unoptimized // ✅ required for gifs in Next.js <Image>
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {mag.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{mag.description}</p>

              {/* Read More Link */}
              <Link
                href={
                  mag.id === "tech-future"
                    ? "/magazine/detailed"
                    : `/magazine/${mag.id}`
                }
                className="mt-auto inline-flex items-center text-purple-500 font-medium text-sm cursor-pointer group-hover:underline"
              >
                Read More
                <ArrowRight
                  size={16}
                  className="ml-1 group-hover:translate-x-1 transition"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
