import React from "react";

const MessageField = ({
  name,
  placeholder,
  loading,
  error,
  required,
  rows = 4,
  maxLength,
}) => {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        disabled={loading}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-y min-h-32 motion-opacity-in-0 motion-blur-in-md"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default MessageField;
