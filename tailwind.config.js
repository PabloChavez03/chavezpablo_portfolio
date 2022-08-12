/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepGreen: {
          900: '#1A635C',
        }
      },
      fontFamily: {
        mukta: ["Mukta", 'sans-serif'],
        josefin: ["Josefin Sans", 'sans-serif'],
        sfpro: ["SF Pro Display", 'sans-serif']
      },
      animation: {
        text: "text 2.5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    plugins: [],
  },
};
