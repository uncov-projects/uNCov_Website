"use client";

import Heading from "@/app/magazine/Heading";
import Explanation from "@/app/magazine/EXplanation";
import Usecase from "@/app/magazine/Usecase";
import CreateInnovation from "@/app/magazine/CreateInnovation";

export default function Detailed() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-24 py-12 space-y-16">
      <Heading />
      <Explanation />
      <Usecase />
      <CreateInnovation />
    </div>
  );
}
