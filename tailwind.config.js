/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue:
        ['Epilogue',
         'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(561, 24, 512, 0.25)',
      },
    },
  },
  plugins: [],
}

