/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {
    extend: {
      backgroundColor: ["dark"],
      borderColor: ["dark"],
      textColor: ["dark"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#1C1E2D",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        grayDark: "#273444",
        gray: "#8492a6",
        grayLight: "#d3dce6",
      },
    },
  },
  plugins: [],
};
