/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        anthracite: {
          1: '#040405',
          2: '#070708',
          3: '#0D0D0F',
          4: '#141417',
          5: '#1B1B1E',
          6: '#212125',
          7: '#28282D',
          8: '#919192',
          9: '#C0C0C0',
          10: '#DEDEDE',
          11: '#F1F1F1',
          12: '#FBFBFC',
        },
      },
    },
    fontFamily: {
      heading: ['Outfit', 'Sans-Serif'],
      body: ['Poppins', 'Sans-Serif'],
      display: ['Hermit', 'Monospace'],
    },
  },
  plugins: [require('tailwindcss-radix')()],
}
