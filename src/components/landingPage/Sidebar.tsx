"use client";

import { useState } from "react";
import {
  Home,
  Layers,
  Briefcase,
  Users,
  Phone,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  User,
} from "lucide-react";
import MagzineList from "@/components/landingPage/MagzineList";
export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Services", icon: <Layers size={20} /> },
    { name: "Portfolio", icon: <Briefcase size={20} /> },
    { name: "Team", icon: <Users size={20} /> },
    { name: "Contact", icon: <Phone size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen bg-white border-r border-gray-200 transition-all duration-500 shadow-md flex flex-col fixed z-50 ${
          open ? "w-64" : "w-20"
        }`}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          <h1
            className={`text-xl font-bold text-gray-900 tracking-wide transition-opacity ${
              !open && "opacity-0"
            }`}
          >
            VANTAGE
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            {open ? (
              <ChevronLeft size={20} className="text-gray-600" />
            ) : (
              <ChevronRight size={20} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 mt-6">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all"
            >
              <span className="text-gray-600">{item.icon}</span>
              <span
                className={`whitespace-nowrap text-sm font-medium text-gray-800 transition-opacity ${
                  !open && "opacity-0"
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content + Navbar */}
      <div
        className={`flex-1 flex flex-col transition-all duration-500`}
        style={{ marginLeft: open ? "16rem" : "5rem" }}
      >
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
          {/* Search */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
            <Search
              size={18}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5 ml-6">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition">
              <User size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-800 hidden sm:block">
                Profile
              </span>
            </button>
          </div>
        </header>

       <main className="bg-gray-50 min-h-screen p-8">
          <MagzineList /> {/* 👈 renders your component */}
        </main>
      </div>
    </div>
  );
}
