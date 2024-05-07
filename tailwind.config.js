/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "CoverByYourGrace": ["Covered By Your Grace", "cursive"],
        "ManRope": ["Manrope", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
}

