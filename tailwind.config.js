/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#4CC973",
        secondaryColor: "#F9F9F9",
      },
    },
  },
  plugins: [],
}