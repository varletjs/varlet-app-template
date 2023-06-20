import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vitest/config'

export default defineConfig(() => {
  return {
    lintOnSave: false,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    },
    build: {
      target: ['ios12']
    },
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            'var-image': ['src'],
            'var-avatar': ['src'],
            'var-card': ['src'],
            'var-app-bar': ['image']
          }
        }
      }),
      components({
        resolvers: [VarletUIResolver()]
      }),
      autoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [VarletUIResolver({ autoImport: true })],
        eslintrc: { enabled: true }
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 9988,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true
        }
      }
    },
    test: {
      environment: 'jsdom',
      deps: {
        inline: ['@varlet/ui']
      }
    }
  }
})
