/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  webpack(config, options) {
    return config;
  },
  publicRuntimeConfig: {
    dev: 'dev',
  },
  distDir: '../build',
  dir: './src',
};
