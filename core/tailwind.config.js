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
        'shad': ' 0px 1px 2px white',
        'body-shad': 'inset 0px 0px 82px 20px '
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
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'carre': 'repeating-linear-gradient(90deg, rgba(245, 239, 239, 0.189) 1px, transparent 2px, transparent 40px), repeating-linear-gradient(rgba(245, 239, 239, 0.189) 0.1px , transparent 2px, transparent 40px) '
      },
      backgroundSize:{
        'custom-carre': '40px 40px'
      }

      
     
    

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}