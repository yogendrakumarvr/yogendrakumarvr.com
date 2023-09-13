/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "./src/*/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
