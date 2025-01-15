"use client";
import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";

const ObserverProvider = ({ children }) => {
  useEffect(() => {
    Observer.start();
  }, []);
  return <>{children}</>;
};

export default ObserverProvider;
