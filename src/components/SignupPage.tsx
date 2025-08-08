// React + assets + icons import
import React from "react";
import signupBackground from "../assets/Signup_background.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../styles/SignupPage.css";
import { supabase } from "../supabaseClient";

// SignupPage component
const SignupPage: React.FC = () => {
  // Shared input styles for reuse across input fields
  const sharedInputStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    border: "1px solid #404040",
    borderRadius: "0.75rem",
    padding: "1.25rem 1rem",
    fontSize: "1.5rem",
    color: "#ffffff",
  };
  const handleOAuthLogin = async (provider: 'google' | 'github' | 'linkedin_oidc') => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: window.location.origin, // Where Supabase will redirect after login
    },
  })

  if (error) {
    console.error("OAuth login error:", error.message)
  }
}


  return (
    // Full screen layout split into two halves
    <div className="h-screen flex m-0 p-0">
      {/* Left section: image + gradient + overlay + slogan */}
      <div
        className="flex-1 left-section bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 relative"
        style={{
          backgroundImage: `url(${signupBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Main content over image */}
        <div className="relative z-10 h-full flex flex-col p-8">
          {/* Placeholder for potential top header (commented out) */}
          <div className="flex-1"></div> {/* Spacer to push slogan to bottom */}
          {/* Slogan section */}
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h1
                className="text-white font-bold leading-tight"
                style={{
                  fontSize: "4.5rem",
                  color: "#ffffff",
                  marginBottom: "2rem",
                }}
              >
                Capturing Moments,
                <br />
                Creating Memories
              </h1>
            </div>

            {/* Progress indicators (active dot is last) */}
            <div className="flex" style={{ gap: "1rem", marginBottom: "2rem" }}>
              <div
                style={{
                  width: "3rem",
                  height: "6px",
                  backgroundColor: "#ffffff",
                  opacity: 0.4,
                  borderRadius: "3px",
                }}
              />
              <div
                style={{
                  width: "3rem",
                  height: "6px",
                  backgroundColor: "#ffffff",
                  opacity: 0.4,
                  borderRadius: "3px",
                }}
              />
              <div
                style={{
                  width: "3rem",
                  height: "6px",
                  backgroundColor: "#ffffff",
                  opacity: 1,
                  borderRadius: "3px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right section: Signup form */}
      <div className="flex-1" style={{ backgroundColor: "#1a1a1a" }}>
        <div
          className="h-full flex flex-col justify-start items-center"
          style={{ paddingTop: "120px" }}
        >
          <div className="w-full max-w-sm">
            {/* Heading and login redirect */}
            <div className="text-center mb-12">
              <h1
                className="font-bold"
                style={{
                  fontSize: "3rem",
                  lineHeight: "1.2",
                  color: "#ffffff",
                }}
              >
                Create an account
              </h1>
              <p
                className="mt-2"
                style={{
                  fontSize: "1.25rem",
                  color: "#6b7280",
                  marginBottom: "3rem",
                }}
              >
                Already have an account?
                <a
                  href="#"
                  className="hover:underline ml-1"
                  style={{ color: "#ffffff" }}
                >
                  Log in
                </a>
              </p>
            </div>

            {/* Signup form starts */}
            <div style={{ marginLeft: "6rem", marginRight: "6rem" }}>
              <form>
                {/* Form inputs with spacing */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "2rem",
                  }}
                >
                  {/* First name and last name side by side */}
                  <div
                    className="grid grid-cols-2"
                    style={{ columnGap: "2rem" }}
                  >
                    <input
                      type="text"
                      placeholder="Fletcher"
                      className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                      style={sharedInputStyle}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                      style={sharedInputStyle}
                    />
                  </div>

                  {/* Email input */}
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
                    style={sharedInputStyle}
                  />

                  {/* Password input */}
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full pr-12 focus:outline-none focus:ring-1 focus:ring-gray-500"
                      style={sharedInputStyle}
                    />
                  </div>
                </div>
              </form>

              {/* Terms and conditions checkbox */}
              <div
                className="flex items-center"
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  columnGap: "1rem",
                }}
              >
                <input
                  type="checkbox"
                  id="terms"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #404040",
                    borderRadius: "4px",
                  }}
                />
                <label
                  htmlFor="terms"
                  style={{
                    fontSize: "1.125rem",
                    color: "#9ca3af",
                    lineHeight: "1.2",
                  }}
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="hover:underline"
                    style={{ color: "#ffffff" }}
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#7c3aed",
                  fontSize: "1.2rem",
                  marginBottom: "2rem",
                  padding: "1.2rem 0",
                  color: "#ffffff",
                }}
              >
                Create account
              </button>

              {/* Divider with text */}
              <div
                className="flex items-center mb-8"
                style={{
                  color: "#6b7280",
                  fontSize: "1rem",
                  marginBottom: "2rem",
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
                <button  onClick={() => handleOAuthLogin('google')}
                  type="button"
                  className="flex items-center justify-center flex-1 rounded-lg hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #404040",
                    padding: "1rem",
                  }}
                >
                  <FcGoogle size={24} style={{ marginRight: "0.5rem" }} />
                  <span style={{ color: "#ffffff", fontSize: "1rem" }}>
                    Google
                  </span>
                </button>

                {/* LinkedIn button */}
                <button onClick={() => handleOAuthLogin('linkedin_oidc')}
                  type="button"
                  className="flex items-center justify-center flex-1 rounded-lg hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #404040",
                    padding: "1rem",
                  }}
                >
                  <FaLinkedinIn
                    size={24}
                    color="#0077b5"
                    style={{ marginRight: "0.5rem" }}
                  />
                  <span style={{ color: "#ffffff", fontSize: "1rem" }}>
                    LinkedIn
                  </span>
                </button>

                {/* GitHub button */}
                <button onClick={() => handleOAuthLogin('github')}
                  type="button"
                  className="flex items-center justify-center flex-1 rounded-lg hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #404040",
                    padding: "1rem",
                  }}
                >
                  <FaGithub
                    size={24}
                    color="#ffffff"
                    style={{ marginRight: "0.5rem" }}
                  />
                  <span style={{ color: "#ffffff", fontSize: "1rem" }}>
                    GitHub
                  </span>
                </button>
              </div>
              {/* End of social buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export SignupPage for use in app
export default SignupPage;
