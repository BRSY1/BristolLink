import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { getDateString } from "../../utils/getDateString";

const SubmissionSection = ({ submission }) => {
  return (
    <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-2xl shadow-lg shadow-red-200">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center gap-2">
        <span>💌</span> Your Crush Submission
      </h2>

      {submission ? (
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-pink-100">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Crush's Email</p>
                <a
                  href={`mailto:${submission.crush_email}`}
                  className="text-lg text-pink-600"
                >
                  {submission.crush_email}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Your Message</p>
                <p className="text-gray-700">{submission.message}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Submitted</p>
                <p className="text-gray-600">
                  {getDateString(submission.created_at)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Display a message and button if no submission exists
        <div className="text-start">
          <p className="text-gray-500 mb-4">
            Ready to share your feelings? Take the first step!
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
