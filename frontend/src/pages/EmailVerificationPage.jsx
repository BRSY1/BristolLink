import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useNavigate, useParams } from "react-router-dom";
import useEmailVerification from "../hooks/useEmailVerification";
import { ClipLoader } from "react-spinners";
import SuccessMessage from "../components/messages/SuccessMessage";
import ErrorMessage from "../components/messages/ErrorMessage";

function EmailVerificationPage() {
  useDocumentTitle("Email Verification");

  const { code } = useParams();
  const navigate = useNavigate();
  const { loading, errorMsg, successMsg } = useEmailVerification(code);

  return (
    <>
      <div className="font-poppins w-full h-screen p-8 bg-white flex flex-col justify-center max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-pink-800 mb-10 text-center">
          Email Verification
        </h1>

        <div className="space-y-6 flex flex-col items-center">
          {loading && (
            <ClipLoader color="#ec4899" size={32} className="mx-auto" />
          )}

          {successMsg && <SuccessMessage message={successMsg} />}
          {errorMsg && <ErrorMessage message={errorMsg} />}

          <div
            className="mt-6 mx-auto px-6 py-3 bg-pink-500 text-white font-medium rounded-lg 
              text-center cursor-pointer hover:bg-pink-600 transition-colors duration-300 
              max-w-xs"
            onClick={() => navigate("/dashboard")}
          >
            → Head to submission page
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerificationPage;
