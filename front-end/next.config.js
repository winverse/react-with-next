const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
  webpack(config, options) {
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

    config.resolve.modules.unshift(__dirname)

    return config
  },
  publicRuntimeConfig: {
    dev: 'dev',
  },
  distDir: '../build',
  dir: './src',
};
