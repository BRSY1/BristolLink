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
  const { authState } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const filteredPages = pages.filter((page) => {
    if (authState.isLoggedIn) {
      return page.title !== "Register" && page.title !== "Login";
    }
    return true;
  });

  return (
    <nav className="fixed top-4 font-poppins left-4 right-4 rounded-2xl shadow-2xl z-10 bg-white/50 backdrop-blur-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center transition-all duration-300 ease-in-out">
          {/* Logo and Menu Button */}
          <div className="flex items-center justify-between w-full hover:">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.webp"
                alt="Logo"
                className="h-14 w-14 rounded-full hover:saturate-0 duration-700"
              />
            </Link>

            <div className="md:hidden flex items-end gap-4">
              {/* Home icon for mobile */}
              {/* We don't need  */}
              {/* {authState.isLoggedIn && (
                <Link to="/dashboard">
                  <TbHome
                    className="text-gray-700 h-6 w-6 hover:text-pink-600 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  />
                </Link>
              )} */}

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
            {/* {authState.isLoggedIn && (
              <Link to="/dashboard">
                <TbHome
                  className="mx-3 text-gray-700 h-5 w-5 hover:text-pink-700 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                />
              </Link>
            )} */}
            {filteredPages.map((page, index) => (
              <DesktopNavItem key={index} title={page.title} path={page.path} />
            ))}
          </div>

          {/* Mobile Menu Items */}
          {isOpen && (
            <div className="flex flex-col mb-4 w-full md:hidden motion-preset-blur-down-lg">
              {filteredPages.map((page, index) => (
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
