import { Themes } from '@varlet/ui'

export const lightTheme = Themes.toViewport({
  // varlet
  ...Themes.md3Light,
  '--hsl-secondary': '264, 8%, 12%',
  '--color-secondary': 'hsla(var(--hsl-secondary), 1)',
  '--hsl-tertiary': 'var(--hsl-on-surface-variant)',
  '--color-tertiary': 'hsla(var(--hsl-tertiary), 1)',
  '--hsl-muted': '270, 4%, 47%',
  '--color-muted': 'hsla(var(--hsl-muted), 1)'
})
