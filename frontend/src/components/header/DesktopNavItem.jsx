import React from "react";
import { Link } from "react-router-dom";

const DesktopNavItem = ({ title, path }) => {
  return (
    <Link
      className="px-3 py-2 text-sm font-poppins whitespace-nowrap text-gray-700 hover:text-pink-600 duration-700 transition-all"
      to={path}
    >
      {title}
    </Link>
  );
};

export default DesktopNavItem;
