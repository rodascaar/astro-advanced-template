const postcssPresetEnv = require("postcss-preset-env")
// const postcssUncss = require("postcss-uncss");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      minimumVendorImplementations: 0,
    }),

    // postcssUncss({
    //   html: ["./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    // }),

    require("autoprefixer"),
  ],
};
