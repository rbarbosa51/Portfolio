const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT( {
  content: [
    "./src/**/*.html",
    "./src/**/*.{js,jsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
    ],
  darkMode: "class", // or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
})

