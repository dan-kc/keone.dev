/** @type {import('tailwindcss').Config} */ const {
  fontFamily,
} = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    maxWidth: {
      0: '0',
      none: 'none',
      xs: '320px',
      sm: '384px',
      md: '448px',
      lg: '512px',
      xl: '576px',
      '2xl': '672px',
      '3xl': '768px',
      '4xl': '896px',
      '5xl': '1024px',
      '6xl': '1152px',
      '7xl': '1280px',
      full: '100%',
      max: 'max-content',
      fit: 'fit-content',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px',

    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
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
        sand: {
          1: '#161615',
          2: '#1c1c1a',
          3: '#232320',
          4: '#282826',
          5: '#2e2e2b',
          6: '#353431',
          7: '#3e3e3a',
          8: '#51504b',
          9: '#717069',
          10: '#7f7e77',
          11: '#a1a09a',
          12: '#ededec',
        },
        olive: {
          1: '#151715',
          2: '#1a1d19',
          3: '#20241f',
          4: '#262925',
          5: '#2b2f2a',
          6: '#313530',
          7: '#3b3f3a',
          8: '#4c514b',
          9: '#687366',
          10: '#778175',
          11: '#9aa299',
          12: '#eceeec',
        },
        sage: {
          1: '#141716',
          2: '#191d1b',
          3: '#1f2421',
          4: '#252a27',
          5: '#2a2f2c',
          6: '#303633',
          7: '#393f3c',
          8: '#4a524e',
          9: '#66736d',
          10: '#75817b',
          11: '#99a29e',
          12: '#eceeed',
        },
        slate: {
          1: '#151718',
          2: '#1a1d1e',
          3: '#202425',
          4: '#26292b',
          5: '#2b2f31',
          6: '#313538',
          7: '#3a3f42',
          8: '#4c5155',
          9: '#697177',
          10: '#787f85',
          11: '#9ba1a6',
          12: '#ecedee',
        },
        mauve: {
          1: '#161618',
          2: '#1c1c1f',
          3: '#232326',
          4: '#28282c',
          5: '#2e2e32',
          6: '#34343a',
          7: '#3e3e44',
          8: '#504f57',
          9: '#706f78',
          10: '#7e7d86',
          11: '#a09fa6',
          12: '#ededef',
        },
      },
    },
    fontFamily: {
      heading: ['var(--font-outfit)', ...fontFamily.sans],
      body: ['var(--font-poppins)', ...fontFamily.sans],
      display: ['Hermit', 'Monospace', ...fontFamily.mono],
    },
  },
  plugins: [],
}