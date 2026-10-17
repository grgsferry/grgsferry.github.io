/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ds-yellow": "#FDE725",
        "ds-green-1": "#7AD151",
        "ds-green-2": "var(--ds-green-2)",
        "ds-blue": "#2A788E",
        "ds-purple": "#414487",
      },
      fontFamily: {
        ibm: ["var(--font-ibm)", "sans-serif"],
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(140px, -180px) scale(1.2)" },
          "66%": { transform: "translate(-120px, 100px) scale(0.85)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
