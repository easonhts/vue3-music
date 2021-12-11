/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/variable.less')]
    })
}

module.exports = {
  devServer: {
    before: require('./mock/mock-server')
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)))
  }
}
