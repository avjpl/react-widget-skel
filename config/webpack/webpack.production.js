const path = require('path');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const {
  extractCSS,
  generateSourceMaps,
  minifyJavaScript,
} = require('./parts');

const productionConfig = merge([
  {
    entry: ['./src/index.prod.js'],
    output: {
      path: path.resolve(__dirname, '../..', 'dist'),
      filename: 'widget.js',
      library: 'Widget',
      libraryTarget: 'umd',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
  },
  extractCSS(),
  minifyJavaScript(),
  generateSourceMaps({ type: 'source-map' }),
]);

module.exports = productionConfig;
