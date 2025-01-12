import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingButton = ({ type, loading, children, ...props }) => {
  return (
    <button
      type={type}
      className="w-full mt-2 px-4 py-3 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition-colors text-lg font-medium motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm motion-duration-[2s] motion-delay-200"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ClipLoader color="#fff" size={24} className="mx-auto" />
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
