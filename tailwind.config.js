/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "#f5f7fe",
        "50": "#333333",
        "100": "#000",
      },
      white: {
        "100": "#fff",
        "200": "#c2c2c2",
      },
      blue: {
        "100": "#0a79f7",
      },
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif"],
    }
  },
  plugins: [],
}
