/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      s: 16,
      m: 18,
      l: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: "transparent",

      black: '#000000',
      white: '#FFF',

      gray: {
        '900': '#121214',
        '800': '#202024',
        '400': '#7C7C8A',
        '200': '#C4C4CC',
        '100': '#E1E1E1',
      },

      cyan: {
        '500': '#81d8f7',
        '300': '#9BE1FB',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
