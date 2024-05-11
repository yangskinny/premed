/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'neutronic': ['Neutronic', 'monospace'],
        'passenger': ['Atkinson Hyperlegible', 'PassengerSans', 'system-ui']
      },
      backgroundColor: {
        'softwhite': '#F4F6F6',
      }
    },
  },
  plugins: [],
}

