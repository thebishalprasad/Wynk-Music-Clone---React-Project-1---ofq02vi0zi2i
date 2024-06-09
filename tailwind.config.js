/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs': '400px', // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
}

