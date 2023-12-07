/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBlue: 'hsl(217,28%, 15%)',
        darkBlue1: 'hsl(218,28%, 13%)',
        darkBlue2: 'hsl(216,53%, 9%)',
        darkBlue3: 'hsl(219,30%, 18%)',
        accentCyan: 'hsl(176,68%, 64%)',
        accentBlue: 'hsl(798,60%, 50%)',
        LightRed: 'hsl(0,100%, 63%)',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      }, 
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        alata: ['Alata']
      }, 
      backgroundImage : (theme) => ({
        'logo-dark-mode': "url('./src/assets/images/rhs-high-resolution-logo-white-transparent.png')", 
        'logo-light-mode': "url('./src/assets/images/rhs-high-resolution-logo-black-transparent.png')", 
        // 'bg-curvy-dark-mode': "url('./src/assets/images/bg-curvy-dark-mode.svg')", 
        // 'bg-curvy-light-mode': "url('./src/assets/images/bg-curvy-light-mode.svg')", 
      })
    },
  },
  plugins: [],
}