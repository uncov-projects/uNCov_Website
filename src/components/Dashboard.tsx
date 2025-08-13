import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true }); // Redirect to login after logout
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold tracking-wide">
            🌐 My Website
          </h1>
          <div className="flex space-x-6 text-white font-medium">
            <Link
              to="/dashboard"
              className="hover:text-yellow-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="hover:text-yellow-300 transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="hover:text-yellow-300 transition-colors"
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 transition-colors px-4 py-1 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 drop-shadow-lg">
          Welcome to the Website
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          This is your personalized dashboard. Explore your account, manage
          settings, and enjoy a seamless experience.
        </p>
      </main>
    </div>
  );
}
