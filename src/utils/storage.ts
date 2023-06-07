export interface Storage extends globalThis.Storage {
  set(key: string, value: any): void
  get(key: string): any
  remove(key: string): void
}

const createStorage = (storage: globalThis.Storage): Storage => {
  return {
    ...storage,

    set(key: string, value: unknown) {
      if (typeof value !== 'string') {
        value = JSON.stringify(value)
      }

      storage.setItem(key, value as string)
    },

    get(key: string) {
      const data = storage.getItem(key) as string

      try {
        return JSON.parse(data)
      } catch (err) {
        return data
      }
    },

    remove(key: string): void {
      storage.removeItem(key)
    }
  }
}

export const sessionStorage = createStorage(globalThis.sessionStorage)

export const localStorage = createStorage(globalThis.localStorage)
