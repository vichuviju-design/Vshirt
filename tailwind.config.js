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
          DEFAULT: '#FF6F61', // Coral
          blue: '#007BFF', // Electric Blue
        },
        neutral: {
          light: '#F5F5F5',
          dark: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

