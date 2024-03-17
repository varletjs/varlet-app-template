import { localStorage } from '@/utils/storage'
import { darkTheme } from '@/styles/dark'
import { lightTheme } from '@/styles/light'

export function useDark() {
  const saved = localStorage.get('prefer-dark')
  const isDark = ref(saved || (saved == null && window.matchMedia('(prefers-color-scheme: dark)').matches))

  function updateTheme() {
    StyleProvider(isDark.value ? darkTheme : lightTheme)
    document.documentElement.style.setProperty('color-scheme', isDark.value ? 'dark' : 'light')
  }

  function toggleDark() {
    isDark.value = !isDark.value
    localStorage.set('prefer-dark', isDark.value)
    updateTheme()
  }

  updateTheme()

  return {
    isDark,
    toggleDark
  }
}
