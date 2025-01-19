import React, { useState } from "react";

const Accordion = ({ index, title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`border-b border-gray-300 motion-preset-blur-down-md motion-duration-[2s] ${
        accordionOpen && "bg-pink-100/20"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-2"
      >
        <p className="px-6 font-poppins mt-2 flex justify-start text-left">
          {title}
        </p>

        <svg
          className="fill- shrink-0 ml-8 mr-8 mt-3"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`fill-pink-600 transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`fill-pink-600 transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm font-nunito px-4 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mb-2 px-2 text-gray-500">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
