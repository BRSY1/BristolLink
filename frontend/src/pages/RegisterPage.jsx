import React, { useState } from "react";
import api from "../utils/api";
import { validateEmail, validatePassword } from "../utils/validators";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";
import LoadingButton from "../components/LoadingButton";
import useFormHandler from "../hooks/useFormHandler";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RegisterPage() {
  useDocumentTitle("Register - BristolLink");

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
    <div className="w-full h-screen p-8 bg-white flex flex-col justify-center max-w-md mx-auto">
      <h1 className="text-4xl font-semibold text-pink-800 mb-10 text-center">
        Register
      </h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          required
        />

        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          error={errors.confirmPassword}
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
            label="I agree to the privacy statement"
            required
          />
        </div>

        <LoadingButton type="submit" loading={loading}>
          Register
        </LoadingButton>
      </form>

      {successMsg && <SuccessMessage message={successMsg} />}
      {errors.submit && <ErrorMessage message={errors.submit} />}
    </div>
  );
}

export default RegisterPage;
