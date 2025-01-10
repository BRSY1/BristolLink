import React, { useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute() {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
