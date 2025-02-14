import React from "react";

const SuccessMessage = ({ message }) => {
  return (
    <div className="m-4 p-3 bg-green-100/50 text-green-700 text-center rounded">
      {message}
    </div>
  );
};

export default SuccessMessage;
