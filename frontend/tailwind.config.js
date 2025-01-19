/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "delayed-overflow-hidden": "delayed-overflow-hidden 0.75s forwards",
      },
      keyframes: {
        "delayed-overflow-hidden": {
          "0%": { overflow: "visible" },
          "99%": { overflow: "visible" },
          "100%": { overflow: "hidden" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
