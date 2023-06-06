import { type Storage } from './types/storage.type'

const sessionstorage: Storage = {
  set(key: string, value: any): void {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    sessionStorage.setItem(key, value)
  },
  get(key: string): any {
    const data = sessionStorage.getItem(key) as string
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  },
  remove(key: string): void {
    sessionStorage.removeItem(key)
  }
}

export default sessionstorage
