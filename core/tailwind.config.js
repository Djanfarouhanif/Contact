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
        'screen': {'max': '900px' },
        'scR': {'max': '700px'}
      },
      boxShadow: {
        'shad': ' 0px 0px 2px 1px'
      },
      animation: {
        speed: 'speed 10s infinite linear'
      },
      keyframes: {
        speed: {
          '0%':{transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(calc(-300px * 5))'}
        }
      },
      width: {
        "l30": 'calc(300px * 10)'
      },
     
    

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}