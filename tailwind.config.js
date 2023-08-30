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
        textPrimaryColor: "rgba(0,0,0,.87)",
      },
    },
  },
  plugins: [],
};
