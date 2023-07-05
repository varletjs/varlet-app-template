import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import pages from 'vite-plugin-pages'
import compression from 'vite-plugin-compression'
import eruda from 'vite-plugin-eruda'
import { fileURLToPath, URL } from 'node:url'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vitest/config'
import { extendRoute } from './src/router/extendRoute'

export default defineConfig(() => {
  return {
    base: './',

    lintOnSave: false,

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    server: {
      host: '0.0.0.0',
      port: 9988
    },

    build: {
      target: ['ios12']
    },

    test: {
      environment: 'jsdom',
      setupFiles: ['tests/setup.ts'],
      deps: {
        inline: ['@varlet/ui']
      }
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
      }),

      compression(),

      eruda()
    ]
  }
})
