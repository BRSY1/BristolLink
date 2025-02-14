import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

const TeamMember = ({
  name,
  role,
  email,
  image,
  github,
  linkedin,
  twitter,
  instagram,
  website,
}) => {
  const socialLinks = [
    {
      icon: MdOutlineEmail,
      href: email ? `mailto:${email}` : null,
      label: "Email",
    },
    { icon: FiGithub, href: github, label: "GitHub" },
    { icon: FaLinkedinIn, href: linkedin, label: "LinkedIn" },
    { icon: FaXTwitter, href: twitter, label: "Twitter" },
    { icon: FaInstagram, href: instagram, label: "Instagram" },
    { icon: CiGlobe, href: website, label: "Website" },
  ].filter((link) => link.href);

  return (
    <div
      className="group relative overflow-hidden flex flex-col items-center p-6 rounded-2xl 
      bg-gradient-to-br from-white/80 to-pink-50/80 shadow-lg
      transition-all duration-300 hover:shadow-2xl hover:shadow-pink-200 
      hover:to-pink-100/90 max-w-lg w-full mx-auto"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-400 to-pink-600 
        transform scale-x-0 group-hover:scale-x-100 origin-left 
        transition-transform duration-300" />
      
      
      <h3 className="text-2xl font-semibold text-neutral-900 mb-2 relative z-10 
        group-hover:text-pink-700 transition-colors">
        {name}
      </h3>
      
      <p className="text-neutral-600 text-center mb-4 relative z-10 
        group-hover:text-neutral-800 transition-colors">
        {role}
      </p>
      
      <div className="flex gap-4 mt-2 relative z-10">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 
            transition-colors duration-300 hover:scale-110"
            aria-label={`${name}'s ${label}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
