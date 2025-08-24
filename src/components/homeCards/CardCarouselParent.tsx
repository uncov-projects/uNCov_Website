import React from "react";
import { CardCarousel } from "../ui/card-carousel";

const CardCarouselParent = () => {
  const images = [
    { src: "/images/testimonial1.jpg", alt: "Image 1" },
    { src: "/images/testimonial2.jpg", alt: "Image 2" },
    { src: "/images/testimonial3.jpg", alt: "Image 3" },
    { src: "/images/testimonial4.jpg", alt: "Image 4" },
    { src: "/images/testimonial5.jpg", alt: "Image 5" },
 
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Trusted by Over{" "}
            <span className="text-purple-600">15k+</span>
            <br />
            Satisfied Clients
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-md">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Convertify has helped businesses across industries enhance their
            sales performance and achieve their goals.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            Get Started Now
          </a>
        </div>
      </div>

      {/* Carousel Section */}
      <CardCarousel images={images} />
    </section>
  );
};

export default CardCarouselParent;
