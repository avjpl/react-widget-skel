const path = require('path');
const { merge } = require('webpack-merge');

const {
  extractCSS,
  generateSourceMaps,
  minifyJavaScript,
} = require('./parts');

const productionConfig = merge([
  {
    output: {
      path: path.resolve(__dirname, '../..', 'dist'),
      filename: 'widget.js',
      library: 'Widget',
      libraryTarget: 'umd',
    },
  },
  extractCSS(),
  minifyJavaScript(),
  generateSourceMaps({ type: 'source-map' }),
]);

module.exports = productionConfig;
