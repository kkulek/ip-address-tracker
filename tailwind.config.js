/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#969696",
        "dark": "#2b2b2b"
      },
      backgroundImage: {
        "arrow": "url('./images/icon-arrow.svg')"
      }
    },
  },
  plugins: [],
}
