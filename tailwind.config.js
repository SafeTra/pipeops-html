/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem',
      /* padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      }, */
    },
    extend: {
      backgroundImage: {
        'header-bg': "url('./src/assets/images/bg-header-bg.svg')",
        'hero-bg': "url('./src/assets/images/bg-hero-bg.svg')",
        'footer-bg': "url('./src/assets/images/bg-footer-bg.svg')",
        'services-bg': "url('./src/assets/images/bg_services_bg.svg')",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBlue: '#48C5D5',
        borderBlue: '#48C5D5',
        customRed: '#D55848',
        customNavy: '#0E2E54',
        customBeige: '#F1D1AB',
      },
      
    },
  
  },
  plugins: [],
}

