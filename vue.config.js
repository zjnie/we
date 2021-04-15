const path = require('path')

module.exports = {
	publicPath: './',
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias.set('@components', path.join(__dirname, 'src/components'))
    config.resolve.alias.set('@assets', path.join(__dirname, 'src/assets'))
    config.resolve.alias.set('@libs', path.join(__dirname, 'src/libs'))
   // console.log( config.module.rule('stylus').oneOf('vue').uses)
    //config.module.rule('stylus').oneOf('vue').use('stylus-loader').loader('shin-loader').end()
    // config.module.rule('stylus').oneOf('vue').use('vue-style-loader').loader('style-loader').options({attributes: {shinmark: true}})
    // config.module.rule('stylus').oneOf('normal').use('vue-style-loader').loader('style-loader').options({attributes: {shinmark: true}})
  },
  css: {
    loaderOptions: {
      stylus: {
        import: path.join(__dirname, 'src/styles/variable.styl')
      }
    },
    extract: true
  },
  productionSourceMap: false,
  devServer: {
    inline: false,
    hot: true,
    port: 9000
  }
}
