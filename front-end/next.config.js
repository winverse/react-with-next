module.exports = {
  webpack(config, options) {
    console.log('opt', options)
    return config
  },
  publicRuntimeConfig: {
    dev: 'dev', 
  },
  distDir: '../build',
  dir: './src'
};