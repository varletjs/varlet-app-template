import { Themes } from '@varlet/ui'

export const darkTheme = Themes.toViewport({
  // varlet
  ...Themes.md3Dark,
  '--color-secondary': 'var(--color-inverse-surface)',
  '--color-tertiary': 'var(--color-on-surface-variant)',
  '--color-muted': '#938f99'
})
