/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "delayed-overflow-hidden": "delayed-overflow-hidden 1s forwards",
        gradient: "gradient 10s ease infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        "delayed-overflow-hidden": {
          "0%": { overflow: "visible" },
          "99%": { overflow: "visible" },
          "100%": { overflow: "hidden" },
        },
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: 0.15,
            filter: "hue-rotate(0deg)"
          },
          "50%": {
            transform: "translateY(-100px) translateX(-100px) rotate(40deg)",
            opacity: 0.25,
            filter: "hue-rotate(10deg)"
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
