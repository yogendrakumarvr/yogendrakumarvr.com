/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#f8f8f8',
        dark: '#0f0f0f',
      },
      fontFamily: {
        primary: ['Major Mono Display', 'sans-serif'],
        secondary: ["'Roboto Mono'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
