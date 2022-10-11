/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Moody-blue': '#737ccf',
        'Link-water': '#e1e5f8',
        'Spindle': '#bbc4eb',
        'Sail': '#c0d7fb'
      }
    },
  },
  plugins: [],
}