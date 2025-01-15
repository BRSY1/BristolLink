import React from "react";
import { Link } from "react-router-dom";

const DesktopNavItem = ({ title, path }) => {
  return (
    <Link
      className="group px-3 py-2 text-sm h-full whitespace-nowrap text-gray-700 hover:text-pink-600 duration-700 transition-all relative"
      to={path}
    >
      <span className="absolute -top-2.5 left-0 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
      {title}
    </Link>
  );
};

export default DesktopNavItem;
