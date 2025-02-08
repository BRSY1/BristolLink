import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-8 font-poppins">
      <div className="w-full mx-auto px-8">
        <div className="group flex flex-col md:flex-row justify-between items-center">
          {/* Info */}
          <div className="mb-6 text-center md:mb-0 intersect:motion-preset-blur-up-lg intersect:motion-duration-1500 intersect-once">
            <h3 className="text-2xl text-pink-800 font-semibold mb-1 group-hover:scale-90 group-hover:text-gray-400 duration-700">
              BristolLink
            </h3>
            <p className="text-gray-400 text-xs group-hover:scale-110 group-hover:text-pink-800 duration-700">Anonymous Crushes, One Click Away</p>
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            <a
              href="mailto:bristollink2024@gmail.com"
              className="hover:text-pink-400 transition-colors intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-180 intersect-once"
            >
              <MdOutlineEmail size={24} />
            </a>
            <a
              href="https://www.instagram.com/bris_link?igsh=MTJneXBlanpuYTZicw=="
              className="hover:text-pink-400 transition-colors intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-180 intersect-once"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/BRSY1"
              className="hover:text-pink-400 transition-colors intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-180 intersect-once"
            >
              <FiGithub size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-6 text-sm border-t border-pink-800/40 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <nav className="flex space-x-4 intersect:motion-preset-blur-right-md intersect-once">
              <Link
                to="/what-is-link"
                className="hover:text-pink-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/privacy-statement"
                className="hover:text-pink-600 transition-colors"
              >
                Privacy
              </Link>
              <Link to="/faq" className="hover:text-pink-600 transition-colors">
                FAQs
              </Link>
              <Link
                to="/contact-us"
                className="hover:text-pink-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="text-gray-400 intersect:motion-preset-blur-up-lg intersect:motion-duration-700 intersect-once">
            © {new Date().getFullYear()} BristolLink. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
