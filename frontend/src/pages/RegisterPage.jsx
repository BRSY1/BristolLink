import React, { useState } from "react";
import api from "../utils/api";
import { validateEmail, validatePassword } from "../utils/validators";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";
import LoadingButton from "../components/LoadingButton";

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const getRequestData = (formData) => {
    return {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccessMsg("");

    const formData = new FormData(event.target);
    const validationErrors = validateFormData(formData);
    const requestData = getRequestData(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      await api.post("/register", requestData);
      setSuccessMsg(
        "A validation email has sent to your email address " + requestData.email
      );
    } catch (err) {
      setErrors({
        submit:
          err.response?.data?.message ||
          "An error occurred during registration. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen p-8 bg-white flex flex-col justify-center max-w-md w-full mx-auto">
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
