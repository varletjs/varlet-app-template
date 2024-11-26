import { mitt } from 'rattail'

export const emitter = mitt()

export function useOn<T extends string>(type: T, handler: (event: any) => void) {
  on()
  onUnmounted(off)

  function on() {
    emitter.on(type, handler)
  }

  function off() {
    emitter.off(type, handler)
  }
}
