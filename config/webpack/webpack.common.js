const { merge } = require('webpack-merge');

const {
  javaScript,
  svg,
  fonts,
  page,
  clean,
  defineEnvVars,
} = require('./parts');

const commonConfig = mode => merge([
  page({ title: 'Demo', mode }),
  svg(),
  javaScript(),
  fonts(),
  clean(),
  defineEnvVars(mode),
]);

module.exports = commonConfig;
