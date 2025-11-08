/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32CD32', // Lime Green (matching logo)
          light: '#90EE90', // Light Green
          dark: '#228B22', // Dark Green
        },
        neutral: {
          light: '#F5F5F5',
          dark: '#111111',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

