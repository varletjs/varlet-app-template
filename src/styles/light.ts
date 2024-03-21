import { Themes } from '@varlet/ui'

export const lightTheme = Themes.toViewport({
  // varlet
  ...Themes.md3Light,
  '--color-secondary': '#1d1b20',
  '--color-tertiary': 'var(--color-on-surface-variant)',
  '--color-muted': '#79747e'
})
