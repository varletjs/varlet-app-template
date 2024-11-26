import { localStorage } from 'rattail'
import { darkTheme } from '@/styles/dark'
import { lightTheme } from '@/styles/light'

export function useDark() {
  const saved = localStorage.get('prefer-dark')
  const isDark = ref(saved || (saved == null && window.matchMedia('(prefers-color-scheme: dark)').matches))

  function updateTheme() {
    localStorage.set('prefer-dark', isDark.value)
    StyleProvider(isDark.value ? darkTheme : lightTheme)
    notify()
  }

  function toggleDark() {
    isDark.value = !isDark.value
    updateTheme()
  }

  function notify() {
    if (window.parent === window) {
      return
    }

    window.parent.postMessage({ type: 'theme-change', isDark: isDark.value }, '*')
  }

  updateTheme()

  return {
    isDark,
    toggleDark,
    updateTheme
  }
}
