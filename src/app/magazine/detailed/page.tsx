"use client";

import Heading from "@/app/magazine/Heading";
import Explanation from "@/app/magazine/EXplanation";
import Usecase from "@/app/magazine/Usecase";
import CreateInnovation from "@/app/magazine/CreateInnovation";
import CodeEditor from "@/components/landingPage/CodeEditor";

export default function DetailedPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 space-y-12">
        
      <Heading />
      <Explanation />
      <Usecase />
      <CreateInnovation />
      <CodeEditor />
    </div>
  );
}
