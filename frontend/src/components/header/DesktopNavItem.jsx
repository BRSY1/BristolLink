import React from "react";
import { Link } from "react-router-dom";

const DesktopNavItem = ({ title, path }) => {
  return (
    <Link
      className="px-3 py-2 text-gray-700 hover:text-pink-600 hover:scale-110 duration-700 transition-all"
      to={path}
    >
      {title}
    </Link>
  );
};

export default DesktopNavItem;
