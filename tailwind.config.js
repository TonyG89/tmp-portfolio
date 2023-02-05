/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'main': ["'Oranienbaum'", "serif"],
      'title': "'Rampart One', cursive",
      'secondary': ["'Yanone Kaffeesatz'", "sans-serif"],
    },
    screens: {
      '2xl': '1440px',
      'xl': '1024px',
      "md": '768px'
    },
    extend: {
      colors: {
        'color1': 'red',
        'color2': 'green',
        'color3': 'black'
      },
      backgroundImage: {
        'cards': "url('./assets/img/bg.jpg')"
      },
      fontFamily: {}
    },
  },
  plugins: [],
}