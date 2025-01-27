import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const TeamMember = ({ name, role, email, github, image }) => (
  <div
    className="group relative overflow-hidden flex flex-col items-center p-6 rounded-xl 
                    bg-gradient-to-br from-white to-pink-100 
                    transition-all duration-300 hover:shadow-red-100  
                    hover:shadow-xl hover:to-pink-200"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

    <div
      className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-pink-200 
                      group-hover:border-pink-300 transition-all 
                      relative z-10"
    >
      <img
        src={image || "/favicon.png"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-xl font-medium text-neutral-900 mb-2 relative z-10">
      {name}
    </h3>
    <p className="text-neutral-700 text-center mb-2 relative z-10">{role}</p>
    <div className="flex gap-4 mt-2">
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-pink-600 hover:text-pink-800
                      transition-colors duration-300"
          aria-label={`Email ${name}`}
        >
          <MdOutlineEmail className="w-5 h-5" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800  
                      transition-colors duration-300"
          aria-label={`${name}'s GitHub`}
        >
          <FiGithub className="w-5 h-5" />
        </a>
      )}
    </div>
  </div>
);

export default TeamMember;