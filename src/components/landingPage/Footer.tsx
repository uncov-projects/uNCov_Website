import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left Section */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 text-white rounded-md px-3 py-2 font-bold text-2xl shadow-md">
                G
              </div>
              <span className="text-2xl font-semibold text-gray-800">Graphy</span>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Graphy empowers teams to transform raw data into clear, compelling
              visuals — making insights easier to share, understand, and act on.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
              {[
                { icon: FaTwitter, href: "#", color: "hover:bg-blue-100" },
                { icon: FaInstagram, href: "#", color: "hover:bg-pink-100" },
                { icon: FaLinkedin, href: "#", color: "hover:bg-blue-200" },
                { icon: FaGithub, href: "#", color: "hover:bg-gray-200" },
              ].map(({ icon: Icon, href, color }, i) => (
                <Link
                  key={i}
                  href={href}
                  className={`p-3 rounded-full bg-white shadow-md transition ${color}`}
                >
                  <Icon className="w-6 h-6 text-gray-700" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-1">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Product
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#" className="hover:text-purple-600">Features</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Pricing</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Integrations</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#" className="hover:text-purple-600">Documentation</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Tutorials</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Blog</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Company
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#" className="hover:text-purple-600">About</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Careers</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Contact</Link></li>
                <li><Link href="#" className="hover:text-purple-600">Partners</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Graphy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-purple-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-purple-600">Terms of Service</Link>
            <Link href="#" className="hover:text-purple-600">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
