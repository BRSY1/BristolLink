import React from "react";

const OtherMember = ({ name, role }) => (
  <div
    className="group relative overflow-hidden bg-gray-100
                    p-4 rounded-lg text-center 
                    transition-all duration-300 
                    transform hover:-translate-y-1 
                    hover:shadow-md w-64"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

    <p className="font-medium text-neutral-900 relative z-10">{name}</p>
    <p className="text-sm text-neutral-600 relative z-10">{role}</p>
  </div>
);

export default OtherMember;
