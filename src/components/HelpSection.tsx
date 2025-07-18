import React from "react";

const HelpSection: React.FC = () => {
  return (
    <section className="bg-[#F7F1E8] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            How can we help you?
          </h2>

          {/* Card 1 - Active */}
          <div className="bg-white p-6 flex items-center justify-between shadow-md">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Save Valuable Time
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Delight your employees and HR teams, making talent mobility an
                exciting experience.
              </p>
            </div>
            <span className="text-xl">→</span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F1E8] p-6 border border-gray-300 flex items-center justify-between hover:shadow-md cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Attract & Retain Top Talent
              </h3>
            </div>
            <span className="text-xl">→</span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F1E8] p-6 border border-gray-300 flex items-center justify-between hover:shadow-md cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                Engagement Productivity
              </h3>
            </div>
            <span className="text-xl">→</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 relative">
          {/* Background Purple Box */}
          <div className="bg-[#6236FF] rounded-tr-[80px] rounded-bl-[80px] h-[340px] flex items-end justify-start p-6">
            {/* Placeholder for avatar */}
          </div>

          {/* Bottom Black Box */}
          <div className="bg-[#1A1A1A] text-white mt-[-50px] z-10 relative p-6 rounded-tr-[40px]">
            <h3 className="font-semibold text-lg">Save Valuable Time</h3>
            <p className="text-sm text-gray-300 mt-1">
              Managing international talent can take up to 3–5x more time than
              managing local talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
