import React from "react";
import GiftCard from "../ui/GiftCard";

const GiftCardSection = () => {
  const steps = [
    {
      step: 1,
      title: "Easy Integration",
      description:
        "Add our testimonial collection widget to your site with a single line of code. Start gathering authentic customer feedback instantly.",
      media: "/images/step1.gif", 
    },
    {
      step: 2,
      title: "Collect Testimonials",
      description:
        "Automatically gather verified customer testimonials and reviews as users interact with your product or service.",
      media: "/images/step1.gif", 
    },
    {
      step: 3,
      title: "Smart Management",
      description:
        "Organize, moderate, and analyze customer testimonials from an intuitive dashboard. Transform feedback into actionable insights.",
      media: "/images/step1.gif",
    },
    {
      step: 4,
      title: "Showcase Social Proof",
      description:
        "Display compelling customer testimonials on your site to boost credibility and increase conversion rates by up to 270%.",
      media: "/images/step1.gif",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
          Simple 4-Step Process
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Collect & Showcase Testimonials
        </h2>
        <p className="text-gray-600 mt-2">
          Transform customer feedback into powerful social proof in minutes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <GiftCard key={step.step} {...step} />
        ))}
      </div>
    </section>
  );
};

export default GiftCardSection;
