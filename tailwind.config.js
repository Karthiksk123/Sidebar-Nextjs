/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    color: {
      ...defaultTheme.colors,
      primary: "#3B81F6",
      white: "#ffffff",
    },
    text: {
      DEFAULT: "#FAFBFC",
      light: "#6C7281",
    },
    light: {
      DEFAULT: "#FAFBFC",
      light: "#F3F4F6",
    },
    extend: {},
  },
  plugins: [],
};
