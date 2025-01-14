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
import { Link } from "react-router-dom";

function LoginPage() {
  useDocumentTitle("Login");
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
    // <Header />
    <>
      {/* <Header /> */}
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
            autoComplete="current-password"
            required
          />

          <LoadingButton type="submit" loading={loading}>
            Login
          </LoadingButton>
        </form>

        <div className="text-center text-sm text-gray-500 mt-5 motion-blur-in-lg motion-duration-[1s] motion-delay-500">
          Don't have an account?
          <Link to="/register" className="font-medium text-pink-500 hover:text-pink-600">
            {" "}
            Sign up
          </Link>
        </div>

        {successMsg && <SuccessMessage message={successMsg} />}
        {errors.submit && <ErrorMessage message={errors.submit} />}
      </div>
    </>
  );
}

export default LoginPage;
