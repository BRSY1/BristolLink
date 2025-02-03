import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

const OtherMember = ({
  name,
  role,
  email,
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
      className="group relative overflow-hidden bg-white 
      p-5 rounded-xl text-center border border-pink-100
      transition-all duration-300 transform hover:-translate-y-2
      hover:shadow-xl hover:shadow-pink-200/50 w-64"
    >
      <div
        className="absolute top-0 left-0 w-full h-1.5 
        bg-gradient-to-r from-pink-400 to-pink-600 
        transform scale-x-0 group-hover:scale-x-100 
        origin-left transition-transform duration-300"
      />

      <p
        className="font-semibold text-lg text-neutral-900 mb-1 relative z-10 
        group-hover:text-pink-700 transition-colors"
      >
        {name}
      </p>

      <p
        className="text-sm text-neutral-600 mb-3 relative z-10 
        group-hover:text-neutral-800 transition-colors"
      >
        {role}
      </p>

      <div className="flex justify-center gap-3 relative z-10">
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
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OtherMember;
