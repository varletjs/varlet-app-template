import { I18nOptions, createI18n } from 'vue-i18n'
import { localStorage } from 'rattail'
import { Locale as UILocale } from '@varlet/ui'
import enUS from './messages/en-US.json'
import zhCN from './messages/zh-CN.json'

UILocale.add('en-US', UILocale.enUS)
UILocale.use(localStorage.get('locale') ?? 'zh-CN')

export type Locale = 'zh-CN' | 'en-US'

const options: I18nOptions = {
  legacy: false,
  locale: localStorage.get('locale') ?? 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN
  }
}

export const i18n = createI18n<false, typeof options>(options)

export function setLocale(locale: Locale) {
  localStorage.set('locale', locale)
  i18n.global.locale.value = locale
  UILocale.use(locale)
}
