import React, { useContext } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import SuccessMessage from "../components/messages/SuccessMessage";
import ErrorMessage from "../components/messages/ErrorMessage";
import MessageField from "../components/common/MessageField";
import useFormHandler from "../hooks/useFormHandler";
import { validateEmail } from "../utils/validators";
import api from "../utils/api";
import InputField from "../components/common/InputField";
import CheckboxField from "../components/common/CheckboxField";
import LoadingButton from "../components/common/LoadingButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SubmissionPage() {
  useDocumentTitle("Submission");
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  const validateFormData = (formData) => {
    const errors = {};

    const emailError = validateEmail(formData.get("crush_email"));
    if (emailError) {
      errors.email = emailError;
    }

    return errors;
  };

  const onSubmit = async (formData) => {
    const submissionData = {
      crush_name: formData.get("crush_name"),
      crush_email: formData.get("crush_email"),
      message: formData.get("message"),
      hint: formData.get("hint") === "on",
    };
    const response = await api.post("/crush/submit", submissionData);
    setSuccessMsg(response.data.message);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  const { loading, errors, successMsg, setSuccessMsg, handleSubmit } =
    useFormHandler({}, validateFormData, onSubmit);

  return (
    <>
      <div className="font-poppins w-full min-h-screen p-8 mt-28 flex flex-col max-w-md mx-auto mb-24">
        <h1 className="text-4xl font-semibold text-pink-800 mb-2 text-center">
          Submit your crush
        </h1>
        <p className="text-gray-600 text-sm mb-10 text-center">
          You can find your crush's email in Outlook directory
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="crush_name"
            placeholder="Nickname of your crush"
            required
          />

          <InputField
            type="email"
            name="crush_email"
            placeholder="Email (ends with @bristol.ac.uk)"
            error={errors.email}
            required
          />

          <MessageField
            name="message"
            placeholder="Type your message here..."
            required
            maxLength={500}
            loading={loading}
          />

          <CheckboxField
            name="confirm"
            label="I confirm that this message does not consist of any offensive information"
            required
          />

          <CheckboxField
            name="hint"
            label={
              <p>
                <b>Give Hint </b> in the email ✨ <br />
                <span className="text-sm text-gray-400 line-clamp-1">
                  (<b>{authState.username.replace(/[a-zA-Z]/g, "x")}</b> has a
                  crush on you...)
                </span>
              </p>
            }
          />

          <LoadingButton type="submit" loading={loading}>
            Submit
          </LoadingButton>
        </form>

        {successMsg && <SuccessMessage message={successMsg} />}
        {errors.submit && <ErrorMessage message={errors.submit} />}
      </div>
    </>
  );
}

export default SubmissionPage;
