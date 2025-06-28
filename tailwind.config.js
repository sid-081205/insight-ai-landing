/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'cozy': {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6be95',
          400: '#f09968',
          500: '#eb7944',
          600: '#dc5f2a',
          700: '#b74a22',
          800: '#923d22',
          900: '#76341f',
        },
        'sage': {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#7d917d',
          500: '#607560',
          600: '#4c5d4c',
          700: '#3f4d3f',
          800: '#354035',
          900: '#2d362d',
        }
      }
    },
  },
  plugins: [],
}