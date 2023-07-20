import { localStorage } from '@/utils/storage'
import { darkTheme } from '@/styles/dark'
import { onMounted } from 'vue'

export function useDark() {
  const saved = localStorage.get('prefer-dark')
  const isDark = ref(saved || (saved == null && window.matchMedia('(prefers-color-scheme: dark)').matches))

  function updateTheme() {
    StyleProvider(isDark.value ? darkTheme : null)
  }

  function toggleDark() {
    isDark.value = !isDark.value
    localStorage.set('prefer-dark', isDark.value)
    updateTheme()
  }

  onMounted(updateTheme)

  return {
    isDark,
    toggleDark
  }
}
