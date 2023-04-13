const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '380px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        deepGreen: {
          900: '#1A635C'
        }
      },
      fontFamily: {
        mukta: ['Mukta', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      animation: {
        text: 'text 2.5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
    plugins: []
  }
}
