import { i18n } from '@/i18n'

export function validateNotEmpty(text = i18n.global.t('Value cannot be empty')) {
  return (v: any) => !!v || text
}

export function validateEmail(text = i18n.global.t('Email format error')) {
  return (v: any) => /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v) || text
}

export function validateLength(length: number, text?: string) {
  text = text ?? i18n.global.t('Length must be {length}', { length })

  return (v: any) => v.length === length || text
}
