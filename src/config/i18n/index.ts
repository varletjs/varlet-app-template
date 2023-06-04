import { createI18n } from 'vue-i18n'
import localstorage from '../../utils/localStorage.js'

export const loadLang = () => {
  const modules: Record<string, any> = import.meta.glob('./langs.*.ts', {
    eager: true
  })
  const langs: Record<string, any> = {}

  for (const path in modules) {
    const name = path.replace(/(\.\/lang\/|\.ts)/g, '')
    langs[name] = modules[path].lang
  }
  return langs
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: loadLang()
})

export const setLang = (lang?: string) => {
  if (lang) {
    localstorage.set('lang', lang)
  }
  i18n.global.locale.value = lang || localstorage.get('lang') || ''
}
