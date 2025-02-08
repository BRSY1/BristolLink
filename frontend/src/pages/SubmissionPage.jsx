import React from "react";
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

function SubmissionPage() {
  useDocumentTitle("Submission");
  const navigate = useNavigate();

  const validateFormData = (formData) => {
    const errors = {};

    const emailError = validateEmail(formData.get("crush_email"));
    if (emailError) {
      errors.email = emailError;
    }

    return errors;
  };

  const onSubmit = async (formData) => {
    const response = await api.post("/crush/submit", formData);
    setSuccessMsg(response.data.message);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const { loading, errors, successMsg, setSuccessMsg, handleSubmit } =
    useFormHandler({}, validateFormData, onSubmit);

  return (
    <>
      <div className="font-poppins w-full h-screen p-8 flex flex-col justify-center max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-pink-800 mb-10 text-center">
          Submit your crush
        </h1>

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
            label="I confirm that this message does not consist of offensive information"
            required
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
