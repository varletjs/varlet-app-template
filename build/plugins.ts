import { VarletImportResolver } from '@varlet/import-resolver'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import layouts from 'vite-plugin-vue-layouts'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import icon from '@varlet/unplugin-icon-builder/vite'
import { extendRoute } from './stacksRoute'
import unoCSS from 'unocss/vite'
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
          'var-app-bar': ['image']
        }
      }
    }),

    jsx(),

    unoCSS(),

    icon({ dir: 'src/assets/icons', onDemand: true }),

    components({
      resolvers: [VarletImportResolver()]
    }),

    autoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dirs: ['./src/composables', './src/stores'],
      eslintrc: { enabled: true },
      resolvers: [VarletImportResolver({ autoImport: true })]
    }),

    layouts(),

    vueRouter({
      routesFolder: [
        {
          src: 'src/pages'
        },
        {
          src: 'src/stacks',
          path: 'stacks/'
        }
      ],
      exclude: ['**/components/**', '**/composables/**', '**/lib/**'],
      extendRoute
    })
    // eruda()
  ]
}
