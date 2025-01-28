import React, { useContext } from "react";
import InputField from "../components/common/InputField";
import LoadingButton from "../components/common/LoadingButton";
import api from "../utils/api";
import SuccessMessage from "../components/messages/SuccessMessage";
import ErrorMessage from "../components/messages/ErrorMessage";
import { validateEmail, validatePassword } from "../utils/validators";
import useFormHandler from "../hooks/useFormHandler";
import { AuthContext } from "../context/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  useDocumentTitle("Login");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

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
    login(response.data.token, response.data.user.username);
    navigate("/dashboard");
  };

  const { loading, errors, successMsg, setSuccessMsg, handleSubmit } =
    useFormHandler({}, validateFormData, onSubmit);

  return (
    <>
      <div className="font-poppins w-full h-screen p-5 bg-white flex flex-col justify-center max-w-md mx-auto">
        <h1 className="text-3xl font-semibold text-pink-500 mb-5 lg:mb-5 text-center">
          Login
        </h1>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            required
          />

          <LoadingButton type="submit" loading={loading}>
            Login
          </LoadingButton>
        </form>

        <div className="text-center text-sm text-gray-500 mt-5 motion-blur-in-lg motion-duration-[1s] motion-delay-500">
          Don't have an account?
          <Link
            to="/register"
            className="font-medium text-pink-500 hover:text-pink-600 hover:underline"
          >
            {" "}
            Register Today!
          </Link>
        </div>

        {successMsg && <SuccessMessage message={successMsg} />}
        {errors.submit && <ErrorMessage message={errors.submit} />}
      </div>
    </>
  );
}

export default LoginPage;
