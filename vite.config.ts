import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import pages from 'vite-plugin-pages'
import { fileURLToPath, URL } from 'node:url'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vitest/config'
import { extendRoute } from './src/router/extendRoute'

export default defineConfig(() => {
  return {
    lintOnSave: false,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      target: ['ios12']
    },
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            img: ['src'],
            video: ['src'],
            audio: ['src'],
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
      }),
      pages({
        extendRoute
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
      setupFiles: ['tests/setup.ts'],
      deps: {
        inline: ['@varlet/ui']
      }
    }
  }
})
