/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    screens: {
      mobile: "0",
      desktop: "900px",
    },
    extend: {
      colors: {
        "g--black": "#2b2b2b",
        "g--gray": "#AFB2B4",
        "g--red": "#FF0000",
        "g--dark--gray": "#58595B",
        "g--light--gray": "#898989",
      },
    },
  },
  plugins: [],
};
