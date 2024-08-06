/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        "n10":"-10px",
        "192":"192px"
      },
      zIndex:{
        "negative":"-1",
      },
      rotate:{
        "n45":"-45deg",
      },
      translate:{
        "n8":"-8px",
      }
    },
  },
  plugins: [],
}

