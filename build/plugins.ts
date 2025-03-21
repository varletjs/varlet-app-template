import { VarletImportResolver } from '@varlet/import-resolver'
import icon from '@varlet/unplugin-icon-builder/vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import layouts from 'vite-plugin-vue-layouts'
import { extendRoute } from './stacksRoute'

// Use as needed
// import eruda from 'vite-plugin-eruda'

export function createVitePlugins() {
  return [
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
          video: ['src'],
          audio: ['src'],
          'var-image': ['src'],
          'var-avatar': ['src'],
          'var-card': ['src'],
          'var-app-bar': ['image'],
        },
      },
    }),

    jsx(),

    unoCSS(),

    icon({ dir: 'src/assets/icons', onDemand: true }),

    components({
      resolvers: [VarletImportResolver()],
    }),

    autoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dirs: ['./src/composables', './src/stores'],
      resolvers: [VarletImportResolver({ autoImport: true })],
    }),

    layouts(),

    vueRouter({
      routesFolder: [
        {
          src: 'src/pages',
        },
        {
          src: 'src/stacks',
          path: 'stacks/',
        },
      ],
      exclude: ['**/components/**', '**/composables/**', '**/lib/**'],
      extendRoute,
    }),
    // eruda()
  ]
}
