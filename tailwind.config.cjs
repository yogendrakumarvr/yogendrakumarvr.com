/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#f8f8f8',
        dark: '#0f0f0f',
      },
      fontFamily: {
        primary: ['JetBrains Mono', 'sans-serif'],
      },
    },
    spacing: {
      4: '4px',
      8: '8px',
      16: '16px',
      32: '32px',
    },
  },
  plugins: [],
};
