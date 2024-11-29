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
      screens: {
        xs: "360px",
        "1.5xl": "1440px",
        "2xl": "1600px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
