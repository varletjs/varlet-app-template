export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportUnit: 'vmin',
      fontViewportUnit: 'vmin',
      unitPrecision: 6,
      unitToConvert: 'px',
      propList: ['*'],
      selectorBlackList: ['var-elevation']
    }
  }
}
