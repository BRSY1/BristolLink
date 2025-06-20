import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import SubmissionPage from "./pages/SubmissionPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotificationPage from "./pages/NotificationPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import WhatIsLinkPage from "./pages/WhatIslinkPage";
import PrivacyStatementPage from "./pages/PrivacyStatementPage";
import ContactUsPage from "./pages/ContactUsPage";
import FAQsPage from "./pages/FAQsPage";
import ObserverProvider from "./context/ObserverProvider";
import DashBoardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/background/Layout";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <AuthProvider>
      <ObserverProvider>
        <Router>
          <Layout>
            {/* Header is moved to it's individual pages, because it will change state based on login */}
            <Header />
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/what-is-link" element={<WhatIsLinkPage />} />
              <Route
                path="/privacy-statement"
                element={<PrivacyStatementPage />}
              />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/faq" element={<FAQsPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/verify/:code" element={<EmailVerificationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashBoardPage />} />
                <Route path="/submit" element={<SubmissionPage />} />
                <Route path="/notifications" element={<NotificationPage />} />
              </Route>
            </Routes>
            <Footer />
          </Layout>
        </Router>
      </ObserverProvider>
    </AuthProvider>
  );
}

export default App;
