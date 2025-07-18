import React from "react";

const Features: React.FC = () => {
  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="md:max-w-md">
            <h2 className="text-4xl font-bold leading-tight">
              New way of the<br /> companies relocation
            </h2>
          </div>
          <div className="mt-6 md:mt-0 md:max-w-sm text-gray-300 text-sm">
            <p>
              Ullamcorper ullamcorper amet cras eu scelerisque enim fermentum
              dolor eu. Platea risus ut consequat nisl felis vitae.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1A1A1A] border border-dashed border-gray-600 p-6">
            <div className="h-40 border border-dashed border-gray-600 mb-6"></div>
            <h3 className="text-lg font-semibold mb-2">
              Employee Experience First
            </h3>
            <p className="text-sm text-gray-400">
              Creating a tailor-made experience for your international talent is
              crucial when moving your people abroad. Settly manages the
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1A1A] border border-dashed border-gray-600 p-6">
            <div className="h-40 border border-dashed border-gray-600 mb-6"></div>
            <h3 className="text-lg font-semibold mb-2">
              Enable & Support HR Team
            </h3>
            <p className="text-sm text-gray-400">
              Freeing up valuable time and resources of your HR team through our
              relocation solution allows them to focus on core business
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1A1A] border border-dashed border-gray-600 p-6">
            <div className="h-40 border border-dashed border-gray-600 mb-6"></div>
            <h3 className="text-lg font-semibold mb-2">
              Scale Your Business with Ease
            </h3>
            <p className="text-sm text-gray-400">
              Planning to expand your team across borders? Set your business up
              to easily scale in every direction, country, size and level of
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
