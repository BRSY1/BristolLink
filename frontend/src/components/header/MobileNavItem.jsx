import React from "react";
import { Link } from "react-router-dom";

const MobileNavItem = ({ title, path, onClick }) => {
  return (
    <Link
      className="block px-4 py-2 text-center text-gray-700 hover:bg-pink-600/20 duration-700 transition-all"
      to={path}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default MobileNavItem;
