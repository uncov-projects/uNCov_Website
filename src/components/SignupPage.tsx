import React, { useState, useEffect } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/SignupPage.css";
import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";
import slide1 from "../assets/Signup_background.jpg";
import slide2 from "../assets/Signup_background2.jpg";
import slide3 from "../assets/Signup_background3.png";
export default function SignupPage() {
  const sharedInputStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    border: "1px solid #404040",
    borderRadius: "0.75rem",
    padding: "0.6rem 0.8rem",
    fontSize: "0.8rem",
    color: "#ffffff",
    marginBottom: "0.1rem",
  };

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleOAuthLogin = async (
    provider: "google" | "github" | "linkedin_oidc"
  ) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    });
    if (error) console.error("OAuth login error:", error.message);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!termsAccepted) {
      setErrorMessage("You must accept the terms and conditions.");
      return;
    }
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { first_name: firstName, last_name: lastName, phone } },
    });
    setLoading(false);
    if (error) {
      setErrorMessage(error.message);
    } else {
      alert(
        "Signup successful! Please check your email to verify your account."
      );
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
        className="text-white font-bold leading-tight"
        style={{
          fontSize: "1.8rem",
          marginBottom: "2rem",
          marginTop: "30rem",
          color: "#ffffff",
        }}
      >
        Capturing Moments,
        <br />
        Creating Memories
      </h1>
    </div>

    {/* Progress bars */}
    <div
      className="flex"
      style={{
        gap: "1rem",
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
            style={{ marginTop: "2rem",marginLeft: "4rem", marginRight: "4rem" }}
          >
            <div className="text-center mb-8">
              <h1
                className="font-bold"
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  textAlign: "left",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                Create an account
              </h1>
              <p
                className="mt-1"
                style={{
                  fontSize: "0.6rem",
                  color: "#6b7280",
                  marginBottom: "0.8rem",
                  textAlign: "left",
                }}
              >
                Already have an account?
                <Link
                  to="/login"
                  className="hover:underline ml-1"
                  style={{ color: "#fff", paddingLeft: "0.5rem" }}
                >
                  Log in
                </Link>
              </p>
            </div>

            {errorMessage && (
              <div
                style={{
                  color: "red",
                  marginBottom: "0.8rem",
                  textAlign: "center",
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSignup}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                <div className="grid grid-cols-2" style={{ columnGap: "1rem" }}>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                    style={sharedInputStyle}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                    style={sharedInputStyle}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                  style={sharedInputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Phone number input */}
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                  style={sharedInputStyle}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pr-12 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    style={sharedInputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="flex items-center"
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  columnGap: "0.5rem",
                }}
              >
                <input
                  type="checkbox"
                  id="terms"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #404040",
                    borderRadius: "4px",
                  }}
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label
                  htmlFor="terms"
                  style={{ fontSize: "0.7rem", color: "#9ca3af" }}
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="hover:underline"
                    style={{ color: "#fff" }}
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#7c3aed",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                  padding: "0.75rem 0",
                  color: "#fff",
                  borderRadius: "0.75rem",
                  border: "none",
                }}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create account"}
              </button>
            </form>

            <div
              className="flex items-center"
              style={{
                color: "#6b7280",
                fontSize: "0.5rem",
                marginBottom: "1rem",
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
              <span>Or register with</span>
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
            <div className="flex justify-between" style={{ gap: "1rem" }}>
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
