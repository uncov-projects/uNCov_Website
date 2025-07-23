import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add("fade-in");
      setTimeout(() => hero.classList.add("visible"), 100);
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="
        
        top-0
        left-0
        w-full
        h-screen
        bg-cover
        bg-center
        overflow-hidden
      "
    >
      {/* 1. Centered Heading */}
      {/* <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-gray-900">
          Enjoy A Smooth
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900">
          Pleasant Relocation
        </div>
      </div> */}

      {/* 2. Hero Image overlapping purple box */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-20">
        <img
          src="../public/Hero.png"
          alt="Person"
          className="
          w-[80vw]                  
          max-w-[320px]            /* Default max-width */
          sm:max-w-[380px]         /* Added for tablets */
          md:max-w-[400px]         /* Added for small laptops */
          lg:max-w-[460px]         /* Added for larger screens */
          h-auto
          object-cover
          rounded-md
        "
        />
      </div>

      <div className="flex flex-col justify-end items-center min-h-screen">
        <div
          className="
          w-[350px]                 /* Default */
          h-[400px]                 /* Default */
          sm:w-[400px]             /* Added for tablets */
          sm:h-[440px]             /* Added for tablets */
          md:w-[450px]             /* Added for small laptops */
          md:h-[480px]             /* Added for small laptops */
          lg:w-[500px]             /* Added for desktops */
          lg:h-[520px]             /* Added for desktops */
          bg-[#7D53FF]
          z-0
          origin-top-right
          animate-expandFromTopRight
          rounded-br-[2rem]
       "
        ></div>
      </div>
    </section>
  );
};

export default Hero;
