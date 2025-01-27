import React from "react";
import { ClipLoader } from "react-spinners";
import { getDateString } from "../../utils/getDateString";

const MatchSection = ({ match, onClickViewDetails }) => {
  return (
    <div
      className={`${
        match
          ? "from-pink-500 to-purple-200 shadow-purple-200 bg-[length:200%_200%] animate-gradient"
          : "from-white to-pink-50 shadow-red-200"
      } 
    bg-gradient-to-br p-6 rounded-2xl shadow-lg text-white relative w-full h-full`}
    >
      <div
        className={`animate-delayed-overflow-hidden ${
          match && "motion-preset-confetti motion-duration-1000"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-between">
          {match ? (
            <>
              <span>🎉 It's a Match!</span> 
            </>
          ) : (
            <p className="text-pink-600">Your Match</p>
          )}
          <span className="text-6xl">💘</span>
        </h2>

        {match ? (
          <div className="group space-y-4 relative z-10">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/30 duration-1000">
              <div className="space-y-3">
                <a
                  href={`mailto:${match.submitter}`}
                  className="text-2xl font-semibold group-hover:text-pink-700 duration-1000"
                >
                  {match.submitter}
                </a>
                <p className="text-gray-100/90">
                  submitted a crush on <b>{match.crush_name}</b>
                </p>
                <p className="text-sm text-white/70">
                  {getDateString(match.created_at)}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={onClickViewDetails}
                className="w-full py-3 px-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
              >
                View details
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/bris_link?igsh=MTJneXBlanpuYTZicw=="
                  )
                }
                className="w-full py-3 px-4 font-semibold bg-pink-700/40 hover:bg-pink-700/50 border border-white/20 rounded-lg transition-colors"
              >
                Like our Instagram
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="flex flex-col items-center gap-4">
              <ClipLoader size={24} color="gray" />
              <p className="text-gray-500">Waiting for your perfect match...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchSection;
