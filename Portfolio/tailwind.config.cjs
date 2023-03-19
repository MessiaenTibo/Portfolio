/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        '18' : '4.45rem',
        '26' : '6.5rem',
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
        '22' : '5.5rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '200': '50rem',
      },
      boxShadow: {
        'header': '0 3px 6px 0 #dadbe0;',
        'card': '2px 2px 10px 3px rgba(0,0,0,.13);'
      },
      colors: {
        "anti-flash-white": "#F0F3F4",
        "orange-peel": "#FF9F1C",
        "caribbean-current": "#16697A",
        "federal-blue": "#080357",
      },
      screens: {
        'xsm': '480px',
        // => @media (min-width: 480px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}