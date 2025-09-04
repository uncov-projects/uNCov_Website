import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 text-gray-700 font-inter overflow-hidden">
      {/* ---------- CTA Section ---------- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        <div className="bg-gradient-to-r from-[#695CFE] to-[#9B8CFF] rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          {/* Left Content */}
          <div className="max-w-lg mb-10 lg:mb-0 relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
              Experience superior <br /> skip tracing
            </h2>
            <p className="text-gray-100 text-lg">
              150+ data points per search, built for professionals.
            </p>
            <button className="bg-white text-[#695CFE] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get started
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <img
              src="/globe-placeholder.png"
              alt="Globe Illustration"
              className="rounded-2xl max-h-64 shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* ---------- Main Footer ---------- */}
      <div className="px-6 lg:px-12 relative -mt-14 z-10">
        <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-12 lg:p-20 shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
            {/* Logo + Address */}
            <div className="space-y-4">
              <h3 className="text-[#695CFE] text-2xl font-extrabold">
                Skipmatrix
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                20619 Torrence Chapel Rd <br />
                Suite 116 #1040 <br />
                Cornelius, NC 28031 <br />
                United States
              </p>
              <div className="pt-2 space-y-1 text-sm text-gray-600">
                <p>📞 1-800-201-1019</p>
                <p>✉️ support@skipmatrix.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-5 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-3 text-gray-600">
                {["Pricing", "Resources", "About us", "FAQ", "Contact us"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-[#695CFE] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-5 text-lg">
                Follow us
              </h3>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter, Youtube].map(
                  (Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="p-3 bg-gray-100 rounded-full hover:bg-[#695CFE] hover:text-white shadow-md transition transform hover:scale-110"
                    >
                      <Icon size={20} />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-5 text-lg">
                Legal
              </h3>
              <ul className="space-y-3 text-gray-600">
                {["Terms of service", "Privacy policy", "Cookie policy"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-[#695CFE] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Skipmatrix. All rights reserved.</p>
            <p className="mt-3 md:mt-0">
              Built with <span className="text-[#695CFE]">❤</span> by Skipmatrix
              Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
