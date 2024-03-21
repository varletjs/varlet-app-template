import { defineConfig, presetUno, presetIcons } from 'unocss'
import { presetVarlet } from '@varlet/preset-unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [presetUno(), presetRemToPx(), presetIcons(), presetVarlet()],
  theme: {
    colors: {
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      muted: 'var(--color-muted)'
    }
  },
  rules: [
    [
      /^text-(.*)$/,
      ([, s]) => {
        const sizes = {
          xl: '18px',
          '2xl': '20px',
          '3xl': '22px',
          '4xl': '24px',
          '5xl': '26px',
          '6xl': '28px',
          '7xl': '30px',
          '8xl': '32px',
          '9xl': '34px'
        }

        return {
          'font-size': sizes[s as keyof typeof sizes]
        }
      }
    ]
  ]
})
