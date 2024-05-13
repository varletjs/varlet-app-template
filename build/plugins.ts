import { VarletImportResolver } from '@varlet/import-resolver'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import icon from '@varlet/unplugin-icon-builder/vite'
import unoCSS from 'unocss/vite'
import { EditableTreeNode } from 'unplugin-vue-router/types'
// Use as needed
// import eruda from 'vite-plugin-eruda'

export interface StackRoute {
  name: string
  children?: StackRoute[]
}

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

    icon({ dir: 'src/assets/icons' }),

    components({
      resolvers: [VarletImportResolver()]
    }),

    autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vue-i18n',
        {
          '@/use': ['useAppRouter']
        }
      ],
      resolvers: [VarletImportResolver({ autoImport: true })],
      eslintrc: { enabled: true }
    }),

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
      exclude: ['**/components/**', '**/use/**'],
      extendRoute(route) {
        const stacks = (route.meta?.stacks ?? []) as StackRoute[]
        const processStacks = (route: EditableTreeNode, stacks: (StackRoute | string)[]) => {
          stacks.forEach((stack) => {
            const isStringifyStack = typeof stack === 'string'
            const name = isStringifyStack ? stack : stack.name
            const newRoute = route.insert(name, `/src/stacks/${name}.vue`)

            if (!isStringifyStack && stack.children) {
              processStacks(newRoute, stack.children)
            }
          })
        }

        processStacks(route, stacks)
      }
    })
    // eruda()
  ]
}
