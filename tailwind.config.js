/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
      colors: {
        primary: "#be3737",
        textPrimaryColor: "#686868",
      },
    },
  },
  plugins: [],
};
