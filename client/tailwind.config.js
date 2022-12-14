/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'aqua': '#00b9ff',
      'red': '#a90000',
      'water': '#0549a5',
      'yellow': '#dfd500',
      'orange': '#ffb300',
    },
  },
  plugins: [],
}
