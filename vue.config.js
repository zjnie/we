const path = require('path')

module.exports = {
	publicPath: './',
  chainWebpack: config => {
    config.resolve.alias.set('@components', path.join(__dirname, 'src/components'))
    config.resolve.alias.set('@assets', path.join(__dirname, 'src/assets'))
    config.resolve.alias.set('@libs', path.join(__dirname, 'src/libs'))
    config.module.rule('stylus').oneOf('vue').use('vue-style-loader').loader('style-loader').options({attributes: {shinmark: true}})
    config.module.rule('stylus').oneOf('normal').use('vue-style-loader').loader('style-loader').options({attributes: {shinmark: true}})
  },
  css: {
    loaderOptions: {
      stylus: {
        import: path.join(__dirname, 'src/styles/variable.styl')
      }
    },
    extract: false
  },
  devServer: {
    hot: true,
    port: 9000
  }
}