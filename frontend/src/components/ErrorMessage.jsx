import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="m-4 p-3 bg-red-100 text-red-700 text-center rounded">
      {message}
    </div>
  );
};

export default ErrorMessage;
