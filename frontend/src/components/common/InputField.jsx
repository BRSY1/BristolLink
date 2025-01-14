import React from "react";

const InputField = ({ type, name, placeholder, loading, error, required, ...props }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={loading}
        required={required}
        className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all motion-preset-blur-left-lg"
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
