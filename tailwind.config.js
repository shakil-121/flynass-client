/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pppins: ['Poppins', 'sans-serif'],
        roboto: [ 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

