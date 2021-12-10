/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')

// const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  devServer: {
    before: require('./mock/mock-server')
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', resolve('src'))
  // }
}
