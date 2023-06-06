export interface Storage {
  set(key: string, value: any): void
  get(key: string): any
  remove(key: string): void
}
