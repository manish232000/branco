module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e6f0ff',
          500: '#3563e9',
          600: '#2749b3',
          700: '#1a327d'
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
}
