/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A84C', light: '#E8C96A', dark: '#A07830', 50: '#FDF8EC', 100: '#F9EDCC', 500: '#C9A84C', 600: '#A07830', 700: '#7A5C22' },
        dark: { DEFAULT: '#1A1A1A', 800: '#222222', 700: '#2D2D2D', 600: '#3A3A3A' }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
