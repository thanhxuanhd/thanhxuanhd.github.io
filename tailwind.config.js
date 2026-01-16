const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const forms = '@tailwindcss/forms';

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
