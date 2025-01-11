import React from "react";

const CheckboxField = ({ name, label, required }) => {
  return (
    <label className="flex items-center gap-2 text-gray-700 motion-opacity-in-0 motion-preset-slide-right motion-blur-in-md">
      <input
        type="checkbox"
        name={name}
        className="w-5 h-5 accent-pink-500 rounded focus:ring-pink-500"
        required={required}
      />
      <span className="text-base">{label}</span>
    </label>
  );
};

export default CheckboxField;
