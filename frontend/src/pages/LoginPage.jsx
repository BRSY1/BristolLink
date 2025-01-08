import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import LoadingButton from "../components/LoadingButton";
import api from "../utils/api";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";
import { validateEmail, validatePassword } from "../utils/validators";
import useFormHandler from "../hooks/useFormHandler";
import { AuthContext } from "../context/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

function LoginPage() {
  useDocumentTitle("Login - BristolLink");
  const { login } = useContext(AuthContext);

  const validateFormData = (formData) => {
    const errors = {};

    const emailError = validateEmail(formData.get("email"));
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(formData.get("password"));
    if (passwordError) {
      errors.password = passwordError;
    }

    return errors;
  };

  const onSubmit = async (formData) => {
    const response = await api.post("/login", formData);
    login(response.data.token);
    setSuccessMsg(response.data.message);
  };

  const { loading, errors, successMsg, setSuccessMsg, handleSubmit } =
    useFormHandler({}, validateFormData, onSubmit);

  return (
    <div className="w-full h-screen p-8 bg-white flex flex-col justify-center max-w-md mx-auto">
      <h1 className="text-4xl font-semibold text-pink-800 mb-10 text-center">
        Login
      </h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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

        <LoadingButton type="submit" loading={loading}>
          Login
        </LoadingButton>
      </form>

      {successMsg && <SuccessMessage message={successMsg} />}
      {errors.submit && <ErrorMessage message={errors.submit} />}
    </div>
  );
}

export default LoginPage;
