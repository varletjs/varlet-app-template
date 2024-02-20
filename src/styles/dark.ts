import { Themes } from '@varlet/ui'

export const darkTheme = Themes.toViewport({
  // varlet
  ...Themes.dark,
  '--color-primary': '#BB86FC',
  '--color-primary-container': '#BB86FC',
  // app
  '--app-cell-active-background': '#BB86FC14',
  '--app-title-color': '#ffffff',
  '--app-subtitle-color': '#aaaaaa',
  '--app-description-color': '#aaaaaa'
})
