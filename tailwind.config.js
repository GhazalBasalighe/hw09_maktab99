/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
      colors: {
        primary: "rgb(166, 38, 38)",
        textPrimaryColor: "#686868",
        primaryHover: "rgb(190, 55, 55)",
        textPrimaryColorHover: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
