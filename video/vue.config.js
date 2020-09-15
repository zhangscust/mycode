module.exports = {
  devServer: {
    post: "8080",
    host: "127.0.0.1",
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }
}
