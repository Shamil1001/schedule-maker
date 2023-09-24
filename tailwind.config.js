/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: "#1C1E2D",
      },
    },
    
  },
  plugins: [],
}