/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1D1616',
          800: '#8E1616',
          600: '#D84040',
          500: '#A31D1D',
          100: '#f24443',
        },
        light: '#EEEEEE'
      }
    },
  },
  plugins: [],
};