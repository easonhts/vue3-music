module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 6,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [], // 转换黑名单，
      minPixelValue: 2,
      mediaQuery: true,
      exclude: [/node_modules/],
      landscape: false
    }
  }
}
