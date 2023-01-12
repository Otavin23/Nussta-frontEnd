/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "#8E00FE",
        violetTwo: "#9D59D2"
      },
    },
  },
  plugins: [],
}