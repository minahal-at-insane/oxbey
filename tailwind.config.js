/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "#666",
        "50": "#333333",
        "100": "#000",
      },
      white: {
        "100": "#fff",
        "200": "#eeeeee",
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
