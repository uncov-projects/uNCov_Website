"use client";

import { useParams } from "next/navigation";

export default function MagazinePage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 capitalize">
        {id?.toString().replace(/-/g, " ")}
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl">
        Welcome to the detailed page of <strong>{id}</strong>.  
        Here you can add more content about this magazine, such as articles,
        images, and insights.
      </p>
    </div>
  );
}
