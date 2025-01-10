import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const login = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
