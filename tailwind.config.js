/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black2: '#040714',
        nav: '#090b13'
      }
    },

  },
  plugins: [],
}