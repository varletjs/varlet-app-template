declare global {
  type Dict<V = any> = Record<string, V>

  type Res<T> = {
    data: T
    code: number
    message: string
  }
}

export {}
