/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overlay: 'rgb(0 0 0 / 50%)',
        overlay200: 'rgb(0 0 0 / 90%)',
        primary: '#64AD9C'
      },
      spacing: {
        '100': '34rem',
      }
    }
  },
  plugins: [],
}
