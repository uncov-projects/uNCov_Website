import React from "react";


const Navbar: React.FC = () => {

  
  return (
    <header>
    <nav className="w-full shadow-md bg-white px-4 md:px-8 py-2 flex items-center justify-between h-16 md:h-20">
      {/* Left: Logo + Explore */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-black">
          <img
            src="../public/Logo.png"
            alt="Person"
            className="w-11 h-11 object-cover rounded-md"
          />
        </span>
        {/* <span className=" font-extrabold font-karla text-xl">uNCov.ai</span> */}
      </div>

     
      {/* Links */}
      <div className="hidden md:flex gap-9 font-semibold text-gray-700 justify-center flex-1 text-lg md:text-lg lg:text-xl">
        <a href="#" className="hover:text-[#7D53FF]">
          Product
        </a>
        <a href="#" className="hover:text-[#7D53FF]">
          Service
        </a>
        <a href="#" className="hover:text-[#7D53FF]">
          Customers
        </a>
        <a href="#" className="hover:text-[#7D53FF]">
          Resource
        </a>
      </div>
      <div className="flex items-center gap-3">
        <button className=" md:inline border border-[#7D53FF] text-[#7D53FF] px-4 py-1.5 rounded text-sm hover:bg-purple-50">
          Log in
        </button>
        <button className=" md:inline bg-[#7D53FF] text-white px-4 py-1.5 rounded text-sm hover:bg-[#531aff]">
          Sign up
        </button>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
