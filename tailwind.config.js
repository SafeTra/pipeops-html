/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      /* padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      }, */
    },
    extend: {},
  },
  plugins: [],
}

