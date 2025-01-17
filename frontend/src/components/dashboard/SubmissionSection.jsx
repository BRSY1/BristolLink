import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { getDateString } from "../../utils/getDateString";

const SubmissionSection = ({ submission }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-xl mb-8">
      <h2 className="text-xl font-semibold text-pink-700 mb-4">
        Your Crush Submission
      </h2>

      {submission ? (
        // Display submission details if submission exists
        <div className="space-y-2">
          <p className="text-pink-700">
            <span className="font-semibold">Crush's Email:</span>{" "}
            {submission.submitter}
          </p>
          <p className="text-pink-700">
            <span className="font-semibold">Message:</span> {submission.message}
          </p>
          <p className="text-pink-700">
            <span className="font-semibold">Submitted at:</span>{" "}
            {getDateString(submission.created_at)}
          </p>
        </div>
      ) : (
        // Display a message and button if no submission exists
        <div className="text-start">
          <p className="text-gray-400 mb-4">
            You haven't submitted your crush yet. Let's get started!
          </p>
          <Link
            to="/submit" // Replace with your submission route
            className="inline-block bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition-colors motion-translate-y-loop-25 motion-duration-1500 hover:motion-paused"
          >
            Submit Your Crush
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubmissionSection;
