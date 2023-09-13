/** @type {import("prettier").Config} */
module.exports = {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  printWidth: 100,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};
