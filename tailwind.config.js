/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
          35: 'calc(100vh - 6rem - 6rem)'
      }
      
    },
  },
  plugins: [],
}

