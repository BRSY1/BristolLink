import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 rounded-2xl shadow-2xl z-50 bg-white/50 backdrop-blur-md md:motion-preset-oscillate-sm motion-duration-2000 hover:motion-paused motion-opacity-in-0">
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

            {/* Menu icon for mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-4 text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            <DesktopNavItem title="Register" path="/register" />
            <DesktopNavItem title="Login" path="/login" />
            <DesktopNavItem title="Privacy Statement" path="/privacy-statement" />
            <DesktopNavItem title="FAQs" path="/faq" />
            <DesktopNavItem title="Contact Us" path="/contact-us" />
          </div>

          {/* Mobile Menu Items */}
          {isOpen && (
            <div className="flex flex-col mb-4 md:hidden motion-preset-blur-down-lg">
              <MobileNavItem title="Register" path="/register" onClick={() => setIsOpen(!isOpen)} />
              <MobileNavItem title="Login" path="/login" onClick={() => setIsOpen(!isOpen)} />
              <MobileNavItem title="Privacy Statement" path="/privacy-statement" />
              <MobileNavItem title="FAQs" path="/faq" />
              <MobileNavItem title="Contact Us" path="/contact-us" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;