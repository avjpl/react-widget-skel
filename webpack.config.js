const { merge } = require('webpack-merge');
const { mode } = require('webpack-nano/argv');

const commonConfig = require('./config/webpack.common');
const productionConfig = require('./config/webpack.production');
const developmentConfig = require('./config/webpack.development');

const getConfig = (mode) => {
  process.env.NODE_ENV = mode;

  switch (mode) {
    case 'production':
      return merge(commonConfig(mode), productionConfig, { mode });
    case 'development':
      return merge(commonConfig(mode), developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
