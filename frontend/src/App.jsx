import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import EmailVerificationPage from "./pages/EmailVerificationPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-row justify-center">
                <h1 className="text-orange-900 text-4xl">
                  Tailwind has been added
                </h1>
              </div>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify/:code" element={<EmailVerificationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
