import React from "react";
import api from "../utils/api";
import { validateEmail, validatePassword } from "../utils/validators";
import InputField from "../components/common/InputField";
import CheckboxField from "../components/common/CheckboxField";
import SuccessMessage from "../components/messages/SuccessMessage";
import ErrorMessage from "../components/messages/ErrorMessage";
import LoadingButton from "../components/common/LoadingButton";
import useFormHandler from "../hooks/useFormHandler";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Link } from "react-router-dom";

function RegisterPage() {
  useDocumentTitle("Register");

  const validateFormData = (formData) => {
    const errors = {};

    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const emailError = validateEmail(email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      errors.password = passwordError;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const onSubmit = async (formData) => {
    const requestData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await api.post("/register", requestData);
    setSuccessMsg(
      "A validation email has sent to your email address " + requestData.email
    );
  };

  const { loading, errors, successMsg, setSuccessMsg, handleSubmit } =
    useFormHandler({}, validateFormData, onSubmit);

  return (
    <>
      <div className="w-full  font-poppins min-h-screen p-5 lg:pt-20 bg-white flex flex-col justify-center max-w-md mx-auto lg:overflow-hidden">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 text-center">
          Register
        </h1>

        <form className="flex flex-col gap-5 lg:gap-3" onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            required
          />

          <InputField
            type="email"
            name="email"
            placeholder="Email (ends with @bristol.ac.uk)"
            error={errors.email}
            required
          />

          <InputField
            type="password"
            name="password"
            placeholder="Password"
            error={errors.password}
            autoComplete="new-password"
            required
          />

          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            error={errors.confirmPassword}
            autoComplete="new-password"
            required
          />

          <div className="flex flex-col gap-3">
            <CheckboxField
              name="isOver18"
              label="I am above the age of 18"
              required
            />

            <CheckboxField
              name="agreeToPrivacy"
              label={
                <>
                  I agree to the{" "}
                  <Link to="/privacy-statement" className="font-semibold text-pink-500">
                    privacy statement
                  </Link>
                </>
              }
              required
            />
          </div>

          <LoadingButton type="submit" loading={loading}>
            Register
          </LoadingButton>
        </form>

        <div className="text-center text-sm text-gray-500 mt-5 motion-blur-in-lg motion-duration-[1s] motion-delay-500">
          Already have an account?
          <Link to="/login" className="font-medium text-pink-500 hover:text-pink-600 hover:underline">
            {" "}
            Login Now!
          </Link>
        </div>

        {successMsg && <SuccessMessage message={successMsg} />}
        {errors.submit && <ErrorMessage message={errors.submit} />}
      </div>
    </>
  );
}

export default RegisterPage;
