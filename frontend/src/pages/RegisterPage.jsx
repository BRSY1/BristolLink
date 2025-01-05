import React from "react";
import api from "../utils/api";
import { validateEmail, validatePassword } from "../utils/validators";

function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-screen p-8 bg-white flex flex-col justify-center max-w-md w-full mx-auto">
      <h1 className="text-4xl font-semibold text-pink-800 mb-10 text-center">
        Register
      </h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email (ends with @bristol.ac.uk)"
          className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          required
        />

        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              name="isOver18"
              className="w-5 h-5 accent-pink-500  rounded focus:ring-pink-500"
              required
            />
            <span className="text-base">I am above the age of 18</span>
          </label>

          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              name="agreeToPrivacy"
              className="w-5 h-5 accent-pink-500 border-pink-300 rounded focus:ring-pink-500"
              required
            />
            <span className="text-base">I agree to the privacy statement</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-2 px-4 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors text-lg font-medium"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
