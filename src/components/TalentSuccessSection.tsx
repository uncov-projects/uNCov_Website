import React from "react";

const TalentSuccessSection: React.FC = () => {
  return (
    <section className="bg-[#1E1E1E] text-white px-6 py-20 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left - Placeholder for image */}
        <div className="relative w-full lg:w-1/2 h-[500px] bg-[#D7FC3C] flex items-end justify-start">
          <div className="absolute top-1/2 left-full w-10 h-1 bg-dashed border-l border-dashed border-gray-600 hidden lg:block" />
          
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            Elevate your talent's<br /> success with us
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Offers a range of relocation services that support your teams and
            international talent from relocation to settling-in, enhancing
            employee engagement, productivity, and well-being.
          </p>

          {/* Box 1 */}
          <div className="bg-[#2B2B2B] p-5 border-l-4 border-[#9F5BFF] relative">
            <div className="absolute left-[-8px] top-4 w-3 h-3 bg-[#9F5BFF] rounded-full" />
            <h4 className="text-white font-semibold mb-1">
              Relocation With A Soft Landing
            </h4>
            <p className="text-gray-400 text-sm">
              Empowers your talent with a digital relocation and soft-landing
              solution, offering them a personalised experience and access to
            </p>
          </div>

          {/* Box 2 */}
          <div className="text-white">
            <h4 className="font-semibold mb-1">
              Settling-In Support For Talent & Teams
            </h4>
            <p className="text-gray-400 text-sm">
              Once successfully moved, provides ongoing assistance to keep
              international talent engaged and happy their time in a new
              country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentSuccessSection;
