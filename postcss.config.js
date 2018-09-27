const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['> 1%', 'last 2 versions'],
      autoprefixer: { grid: true }
    }),
    require('cssnano')
  ]
};

return;

module.exports = {};
