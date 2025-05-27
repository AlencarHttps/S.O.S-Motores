/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC', // Azul principal
          dark: '#004C99',
          light: '#3399FF',
        },
        secondary: {
          DEFAULT: '#666666', // Cinza metálico
          dark: '#444444',
          light: '#888888',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
} 