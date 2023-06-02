import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src/assets', import.meta.url))
      }
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
    ]
  }
})
