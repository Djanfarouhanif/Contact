/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'btn': '#f33cc5'
      },
      colors: {
        'link': '#f33cc5'
      },
      screens: {
        'screen': {'max': '900px'}
      }
    },
  },
  plugins: [],
}