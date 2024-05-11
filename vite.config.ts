import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import { isProduction } from './build/env'
import { createVitePlugins } from './build/plugins'

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    host: '0.0.0.0',
    port: 10086
  },

  build: {
    target: ['ios12'],
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        desktop: fileURLToPath(new URL('./desktop.html', import.meta.url))
      }
    }
  },

  esbuild: {
    drop: isProduction() ? ['console', 'debugger'] : []
  },

  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul'
    },
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.spec.ts'],
    server: {
      deps: {
        inline: ['@varlet/ui']
      }
    }
  },

  plugins: createVitePlugins()
})
