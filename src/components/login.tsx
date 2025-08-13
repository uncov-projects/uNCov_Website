import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";
import slide1 from "../assets/Signup_background.jpg";
import slide2 from "../assets/Signup_background2.jpg";
import slide3 from "../assets/Signup_background3.png";
export default function LoginPage() {
  const navigate = useNavigate();
  
  const sharedInputStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    border: "1px solid #404040",
    borderRadius: "0.75rem",
    padding: "0.6rem 0.8rem",
    fontSize: "0.8rem",
    color: "#ffffff",
    marginBottom: "1rem",
  };
// Add state for email, password, and loading/error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  

  const handleOAuthLogin = async (
    provider: "google" | "github" | "linkedin_oidc"
  ) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    });
    if (error) console.error("OAuth login error:", error.message);
  };

  // Added: Handle form submission for email/password login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      console.error("Login error:", error.message);
      // You can later show error on UI here
    } else {
      console.log("Logged in successfully");
      // Redirect or update UI as needed here
      navigate("/dashboard"); // Redirect to dashboard after successful login
    }
  };


  const images = [slide1, slide2, slide3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#3B334B] flex justify-center items-center p-8">
      {/* Main Card */}
      <div className="flex w-[1180px] h-[660px] bg-[#241F2D] rounded-[1.5rem] shadow-xl overflow-hidden">
        {/* Left Side - Sliding carousel */}
        <div
          className="relative w-1/2 overflow-hidden flex items-center justify-center"
          style={{
            margin: "1rem",
            borderRadius: "1.5rem",
            backgroundColor: "#000",
            height: "630px",
          }}
        >
          {/* Images container */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
              transition: "transform 700ms ease-in-out",
              width: `${images.length * 100}%`,
              height: "100%",
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Overlay text + progress bars */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
            <div className="text-center">
              <h1
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                  textAlign: "center",
                  lineHeight: "1.3",
                  marginTop: "30rem",
                }}
              >
                Welcome Back!
                <br />
                Let’s Continue
              </h1>
            </div>

            {/* Progress bars */}
            <div
              className="flex"
              style={{
                gap: "1rem",
                marginTop: "1rem",
                marginBottom: "2rem",
                justifyContent: "center",
              }}
            >
              {images.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  style={{
                    width: idx === currentImage ? "3rem" : "2rem",
                    height: idx === currentImage ? "6px" : "5px",
                    backgroundColor: "#ffffff",
                    opacity: idx === currentImage ? 1 : 0.4,
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-1/2 bg-[#241F2D] flex justify-center  p-8">
          <div
            className="w-full max-w-md "
            style={{ marginTop: "2rem",marginLeft: "8rem", marginRight: "8rem" }}
          >
            <div className="text-center mb-8">
              <h1
                className="font-bold"
                style={{
                  fontSize: "1.8rem",
                  lineHeight: "1.2",
                  color: "#ffffff",
                  marginTop: "3rem",
                  marginBottom: "0.5rem",
                }}
              >
                Log in to your account
              </h1>
              <p
                className="mt-2"
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  marginBottom: "3rem",
                }}
              >
                Don’t have an account?
                <Link
                  to="/signup"
                  className="hover:underline ml-1"
                  style={{ color: "#ffffff", paddingLeft: "0.5rem" }}
                >
                  Sign up
                </Link>
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                style={sharedInputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                style={sharedInputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    style={{ marginTop:"2rem" , marginBottom: "1rem" }}
                  />
                  <span
                    style={{
                      color: "#9ca3af",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="hover:underline"
                  style={{ color: "#ffffff", marginTop: "2rem",marginBottom: "1rem" }}
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg font-semibold hover:opacity-90 transition-opacity justify-center flex items-center"
                style={{
                  backgroundColor: "#7c3aed",
                  fontSize: "1rem",
                  padding: "1rem 0",
                  color: "#ffffff",
                  height: "2.5rem",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  borderRadius: "0.5rem",
                  border: "none",
                }}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            <div
              className="flex items-center my-8"
              style={{
                color: "#6b7280",
                fontSize: "1rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  height: "1px",
                  backgroundColor: "#404040",
                  marginRight: "1rem",
                }}
              />
              <span>Or log in with</span>
              <div
                style={{
                  flexGrow: 1,
                  height: "1px",
                  backgroundColor: "#404040",
                  marginLeft: "1rem",
                }}
              />
            </div>

            {/* Social signup buttons */}
            <div className="flex justify-between" style={{ gap: "1rem" ,marginTop: "2rem", }}>
              {/* Google button */}
              <button
                onClick={() => handleOAuthLogin("google")}
                type="button"
                className="flex items-center justify-center flex-1 rounded-lg hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #404040",
                  padding: "0.4rem",
                }}
              >
                <FcGoogle size={20} style={{ marginRight: "0.5rem" }} />
              </button>

              {/* LinkedIn button */}
              <button
                onClick={() => handleOAuthLogin("linkedin_oidc")}
                type="button"
                className="flex items-center justify-center flex-1 rounded-lg hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #404040",
                  padding: "0.2rem",
                }}
              >
                <FaLinkedinIn
                  size={20}
                  color="#0077b5"
                  style={{ marginRight: "0.5rem" }}
                />
              </button>

              {/* GitHub button */}
              <button
                onClick={() => handleOAuthLogin("github")}
                type="button"
                className="flex items-center justify-center flex-1 rounded-lg hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #404040",
                  padding: "0.6rem",
                }}
              >
                <FaGithub
                  size={20}
                  color="#ffffff"
                  style={{ marginRight: "0.5rem" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
