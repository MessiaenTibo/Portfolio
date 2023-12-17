/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '18': '4.45rem',
        '26': '6.5rem',
        '2/5': '40%',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
      },
      spacing: {
        '20': '5rem',
        '22': '5.5rem',
        '100': '25rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '200': '50rem',
        '250': '62.5rem',
        '300': '75rem',
        '400': '100rem',
        '500': '125rem',
      },
      boxShadow: {
        header: '0 3px 6px 0 #dadbe0;',
        card: '2px 2px 10px 3px rgba(0,0,0,.13);',
        // DarkMode
        headerDark: '0 3px 6px 0 #0A0A0A;', // '#1A1A1A'
        cardDark: '2px 2px 10px 3px rgba(255,255,255,.1);',
      },
      colors: {
        'anti-flash-white': '#F0F3F4',
        'orange-peel': '#FF9F1C',
        'caribbean-current': '#16697A',
        'federal-blue': '#080357',
        // DarkMode
        dark: '#02020A',
        'anti-flash-white-dark': '#08121A',
        'orange-peel-dark': '#4FFF42   ', // '#CC7B00' OR '#CC7B00'
        'caribbean-current-dark': '#FF2233', // '#0E424F' OR '#FF2233'
        'federal-blue-dark': '#04011A',
      },
      screens: {
        xsm: '480px',
        // => @media (min-width: 480px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      maxWidth: {
        '1/2': '50%',
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
