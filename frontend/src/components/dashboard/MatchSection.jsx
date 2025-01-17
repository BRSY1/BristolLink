import React from "react";
import { ClipLoader } from "react-spinners";
import { getDateString } from "../../utils/getDateString";

const MatchSection = ({ match }) => {
  return (
    <div
      className={`bg-gray-50 p-6 rounded-xl shadow-xl ${
        match && "motion-preset-confetti"
      }`}
    >
      <h2 className="text-xl font-semibold text-pink-700 mb-4">Your Match</h2>
      {match ? (
        <div className="space-y-2">
          <p className="text-pink-700 font-semibold">{match.submitter}</p>
          <p className="text-pink-600">{match.email}</p>
          <p className="text-pink-500">{getDateString(match.created_at)}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400">Waiting for a match</span>
          <ClipLoader size={16} color="#EC4899" />
        </div>
      )}
    </div>
  );
};

export default MatchSection;
