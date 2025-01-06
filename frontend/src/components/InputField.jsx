import React from "react";

const InputField = ({ type, name, placeholder, error, required }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
