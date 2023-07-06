/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

interface ImportMetaEnv {
  readonly VITE_MOCK_API_BASE: string
  readonly VITE_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
