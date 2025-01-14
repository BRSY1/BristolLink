import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import SubmissionPage from "./pages/SubmissionPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotificationPage from "./pages/NotificationPage";
import Header from "./components/header/Header";
import LandingPage from "./pages/LandingPage";
import WhatIsLinkPage from "./pages/WhatIsLinkPage";


function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Header is moved to it's individual pages, because it will change state based on login */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/what-is-link" element={<WhatIsLinkPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify/:code" element={<EmailVerificationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/submit" element={<SubmissionPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
