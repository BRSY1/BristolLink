import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbHome } from "react-icons/tb";

const pages = [
  { title: "Register", path: "/register" },
  { title: "Login", path: "/login" },
  { title: "What is Link?", path: "/what-is-link" },
  { title: "Privacy Statement", path: "/privacy-statement" },
  { title: "FAQs", path: "/faq" },
  { title: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const { authState, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 font-poppins rounded-2xl shadow-2xl z-50 bg-white/50 backdrop-blur-md md:motion-preset-oscillate-sm motion-duration-2000 hover:motion-paused motion-opacity-in-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center transition-all duration-300 ease-in-out">
          {/* Logo and Menu Button */}
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center">
              <img
                src="/favicon.png"
                alt="Logo"
                className="h-14 w-14 rounded-full hover:saturate-0 duration-700"
              />
            </Link>

            <div className="md:hidden flex items-end gap-4">
              {/* Home icon for mobile */}
              {authState.isLoggedIn && (
                <Link to="/dashboard">
                  <TbHome
                    className="text-gray-700 h-6 w-6 hover:text-pink-600 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  />
                </Link>
              )}

              {/* Menu icon for mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 text-gray-700 hover:text-pink-600 focus:outline-none"
              >
                {isOpen ? (
                  <MdClose className="h-6 w-6" />
                ) : (
                  <MdMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {authState.isLoggedIn && (
                <Link to="/dashboard">
                  <TbHome
                    className="mx-3 text-gray-700 h-5 w-5 hover:text-pink-700 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  />
                </Link>
              )}
            {pages.map((page, index) => (
              <DesktopNavItem key={index} title={page.title} path={page.path} />
            ))}
          </div>

          {/* Mobile Menu Items */}
          {isOpen && (
            <div className="flex flex-col mb-4 w-full md:hidden motion-preset-blur-down-lg">
              {pages.map((page, index) => (
                <MobileNavItem
                  key={index}
                  title={page.title}
                  path={page.path}
                  onClick={() => setIsOpen(!isOpen)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
