const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
    },
    extend: {}
  }
}
