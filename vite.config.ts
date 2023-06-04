import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  plugins: [
    vue(),
    autoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [VarletUIResolver({ autoImport: true })]
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
    open: true,
    port: 9988,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true
      }
    }
  }
})
