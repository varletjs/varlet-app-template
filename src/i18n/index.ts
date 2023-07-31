import { createI18n } from 'vue-i18n'
import { localStorage } from '@/utils/storage'
import { Locale as ComponentsLocale } from '@varlet/ui'

ComponentsLocale.add('en-US', ComponentsLocale.enUS)
ComponentsLocale.use(localStorage.get('locale') ?? 'zh-CN')

export type Locale = 'zh-CN' | 'en-US'

export const loadMessages = () => {
  const modules: Record<string, any> = import.meta.glob('./messages/*.ts', {
    eager: true
  })

  return Object.keys(modules).reduce((messages, path) => {
    const locale = path.replace(/(\.\/messages\/|\.ts)/g, '')
    messages[locale] = modules[path].default
    return messages
  }, {} as Record<string, any>)
}

export const i18n = createI18n<false>({
  legacy: false,
  locale: localStorage.get('locale') ?? 'en-US',
  fallbackLocale: 'en-US',
  messages: loadMessages()
})

export function setLocale(locale: Locale) {
  localStorage.set('locale', locale)
  i18n.global.locale.value = locale
  ComponentsLocale.use(locale)
}
