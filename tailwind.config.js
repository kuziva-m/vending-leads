/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE1D23", // Vibrant Red
        dark: "#0F0F0F",    // Rich Black
        light: "#FFFFFF",   // Pure White
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // Keeping your portfolio font
      },
    },
  },
  plugins: [],
};