/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'rgba(108, 99, 255, 1)',
        background: 'rgba(247, 247, 247, 1)',
        textDark: 'rgba(37, 37, 37, 1)',
        fontFamily: {
        buenos: ["Buenos Aires Trial", "sans-serif"],
        }
      },
    },
  },
  plugins: [],
}
