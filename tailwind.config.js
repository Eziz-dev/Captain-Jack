/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        cinzel: ["Cinzel", "sans-serif"],
      },
      colors: {
        primary: "#B61C3E",
        secondary: "#52212E"
      }
    },
  },
  plugins: [],
};
