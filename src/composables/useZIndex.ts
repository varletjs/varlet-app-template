import { Context } from '@varlet/ui'

// z-index is the largest css z-index currently on the top of the stack
export function useZIndex(count = 0) {
  Context.zIndex += count

  const zIndex = ref(Context.zIndex)

  return zIndex
}
