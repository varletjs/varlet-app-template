import { config } from '@vue/test-utils'
import { vi } from 'vitest'

config.global.mocks = {
  $t: (key: string) => key
}

vi.mock('vue-router', () => ({
  useRouter: () => ({
    router: {
      back: () => {},
      push: () => {},
      replace: () => {}
    }
  }),

  useRoute: () => ({
    query: {}
  })
}))
