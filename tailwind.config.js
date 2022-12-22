/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media ("max"-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media ("max"-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media ("max"-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media ("max"-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media ("max"-width: 639px) { ... }

      xs: { max: "480px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-tagwal)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};