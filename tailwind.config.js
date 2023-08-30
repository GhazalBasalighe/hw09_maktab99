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
      },
    },
  },
  plugins: [],
};
