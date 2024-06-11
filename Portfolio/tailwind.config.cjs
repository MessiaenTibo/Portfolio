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
        'orange-peel-dark': '#FFCF2D   ', // '#FFCF2D' OR'#4FFF42' OR '#CC7B00'
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
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '12%': { transform: 'rotate(45deg) scale(1.1)' },
          '25%': { transform: 'rotate(90deg) scale(1)' },
          '37%': { transform: 'rotate(135deg) scale(1.1)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '62%': { transform: 'rotate(225deg) scale(1.1)' },
          '75%': { transform: 'rotate(270deg) scale(1)' },
          '87%': { transform: 'rotate(315deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'spin-fast': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '12%': { transform: 'rotate(45deg) scale(1.08)' },
          '25%': { transform: 'rotate(90deg) scale(1)' },
          '37%': { transform: 'rotate(135deg) scale(1.08)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '62%': { transform: 'rotate(225deg) scale(1.08)' },
          '75%': { transform: 'rotate(270deg) scale(1)' },
          '87%': { transform: 'rotate(315deg) scale(1.08)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'twinkel-normal': {
          '0%': { opacity: 0.8 },
          '50%': { opacity: 0.4 },
          '100%': { opacity: 0.8 },
        },
        'twinkel-bright': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.6 },
          '100%': { opacity: 1 },
        },
        'screen-apear': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in-from-left': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '80%': { opacity: '0.8', transform: 'translateX(0)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-from-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '80%': { opacity: '0.8', transform: 'translateX(0)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-fast': 'spin-fast 8s linear infinite',
        'twinkel-slow': 'twinkel-normal 10s ease-in-out infinite',
        'twinkel-medium': 'twinkel-normal 8s ease-in-out infinite',
        'twinkel-fast': 'twinkel-normal 6s ease-in-out infinite',
        'twinkel-bright-slow': 'twinkel-bright 8s ease-in-out infinite',
        'twinkel-bright-medium': 'twinkel-bright 6s ease-in-out infinite',
        'twinkel-bright-fast': 'twinkel-bright 4s ease-in-out infinite',
        'screen-apear': 'screen-apear 0.5s ease-in-out',
        'fade-in-from-left': 'fade-in-from-left 0.75s ease-out',
        'fade-in-from-right': 'fade-in-from-right 0.75s ease-out',
      },
    },
  },
  plugins: [],
};
