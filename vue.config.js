const path = require('path')
module.exports = {
  publicPath:'./',
  lintOnSave: false,
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        ws: true,
        changeOrigin: true, //允许跨域

      },
    }
  }
}
