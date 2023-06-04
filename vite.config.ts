import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
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
      eslintrc: { enabled: true },
      resolvers: [VarletUIResolver({ autoImport: true })]
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
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
