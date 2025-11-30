/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "#9c9c9c",
        "50": "#333333",
        "100": "#000",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "100": "#0a79f7",
      },
      red: {
        "50": "#FF4880",
        "100": "#D93C3C",
      },
      pink: {
        "100": "#EF09DA",
      },
      purple: {
        "100": "#C689F9",
      }
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif"],
    }
  },
  plugins: [],
}
