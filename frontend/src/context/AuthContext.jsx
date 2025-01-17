import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem("token") || null;
    return {
      token: token,
      username: localStorage.getItem("username") || null,
      isLoggedIn: !!token,
    };
  });

  const login = (token, username) => {
    setAuthState({
      token: token,
      username: username,
      isLoggedIn: true,
    });
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  const logout = () => {
    setAuthState({
      token: null,
      username: null,
      isLoggedIn: false,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
