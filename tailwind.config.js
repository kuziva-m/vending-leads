/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F3EF", // Warm Off-White / Beige
        dark: "#232323", // Deep Charcoal
        light: "#FFFFFF", // Pure White for contrast in cards
        gray: "#EBE9E4", // Slightly darker beige for borders/hover states
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      animation: {
        "text-slide": "text-slide 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "gradient-slow": "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 26%": { transform: "translateY(0%)" },
          "33%, 59%": { transform: "translateY(-25%)" },
          "66%, 92%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(-75%)" },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
