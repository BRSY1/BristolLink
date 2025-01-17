import React, { useContext } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { AuthContext } from "../context/AuthContext";
import SubmissionSection from "../components/dashboard/SubmissionSection";
import MatchSection from "../components/dashboard/MatchSection";
import { MdLogout, MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useCrushSubmission from "../hooks/useCrushSubmission";
import useMatchData from "../hooks/useMatchData";

function DashboardPage() {
  useDocumentTitle("Profile");
  const navigate = useNavigate();
  const { authState, logout } = useContext(AuthContext);
  const { submissionloading, submission, submissionErrorMsg } =
    useCrushSubmission();
  const { matchloading, match, matchErrorMsg } = useMatchData();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen mt-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* title */}
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Hi{" "}
          <span className="font-bold text-pink-700">{authState.username}</span>,
          welcome to BristolLink
        </h1>

        {/* icons */}
        <div className="flex justify-center item-center gap-6 mb-8">
          {/* notification icon */}
          <div className="relative">
            <MdNotificationsNone
              className="text-pink-700 text-2xl cursor-pointer hover:text-pink-600 transition-colors"
              onClick={() => navigate("/notifications")}
            />
            {/* Red dot for unread notifications */}
            <span className="absolute top-0 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* logout icon */}
          <MdLogout
            className="text-pink-700 text-2xl cursor-pointer hover:text-pink-600 transition-colors"
            onClick={handleLogout}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full gap-6">
          <div className="flex-1">
            <MatchSection match={match} />
          </div>
          <div className="flex-1">
            <SubmissionSection submission={submission} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
