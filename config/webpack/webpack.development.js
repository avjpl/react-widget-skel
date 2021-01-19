const { merge } = require('webpack-merge');

const { devServer, css, images } = require('./parts');

const developmentConfig = merge([
  {
    entry: [
      './src/index.dev.js',
      'webpack-plugin-serve/client'
    ],
  },
  devServer(),
  css(),
  images({ limit: 15000 }),
]);

module.exports = developmentConfig;
