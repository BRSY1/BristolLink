import React from "react";

const Step = ({ icon, title, description }) => (
  <div
    className="flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-xl 
                  bg-gradient-to-r from-neutral-50 to-pink-50 
                  hover:from-neutral-100 hover:to-pink-100 
                  transition-all duration-300 transform hover:scale-102 
                  shadow-pink-100 shadow-md hover:shadow-lg hover:shadow-pink-200"
  >
    <div className="flex-shrink-0 p-4 bg-pink-100 rounded-full shadow-inner">
      {icon}
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-medium mb-3 text-neutral-900">{title}</h3>
      <p className="text-neutral-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Step;
