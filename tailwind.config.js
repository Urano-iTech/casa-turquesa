/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./node_modules/flowbite/**/*.js",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  
  ],
}

