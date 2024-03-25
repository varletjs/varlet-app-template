/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
import dayjs from 'dayjs'

interface ImportMetaEnv {
  readonly VITE_MOCK_API_BASE: string
  readonly VITE_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '~stacks' {
  import type { RouteRecordRaw } from 'vue-router'

  const routes: RouteRecordRaw[]
  export default routes
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}
