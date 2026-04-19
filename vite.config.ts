import { fileURLToPath, URL } from 'node:url'
import { VarletImportResolver } from '@varlet/import-resolver'
import icon from '@varlet/unplugin-icon-builder/vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { clean, defineConfig, fmt, hook, lint, staged } from 'rattail/vite-plus'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'
import type { EditableTreeNode } from 'vue-router/unplugin'
import vueRouter from 'vue-router/vite'

interface StackRoute {
  name: string
  children?: StackRoute[]
}

function extendRoute(route: EditableTreeNode) {
  const stacks = (route.meta?.stacks ?? []) as StackRoute[]

  processStacks(route, stacks)

  function processStacks(route: EditableTreeNode, stacks: (StackRoute | string)[]) {
    stacks.forEach((stack) => {
      const isStringifyStack = typeof stack === 'string'
      const name = isStringifyStack ? stack : stack.name
      const newRoute = route.insert(name, `/src/stacks/${name}.vue`)

      if (!isStringifyStack && stack.children) {
        processStacks(newRoute, stack.children)
      }
    })
  }
}

export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 10086,
  },

  build: {
    target: ['ios12'],
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        desktop: fileURLToPath(new URL('./desktop.html', import.meta.url)),
      },
    },
  },

  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.spec.ts'],
    server: {
      deps: {
        inline: ['@varlet/ui'],
      },
    },
  },

  lint: lint({
    ignores: ['typed-router.d.ts'],
  }),

  fmt: fmt(),

  staged: staged(),

  rattail: {
    clean: clean(),
    hook: hook(),
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
      watch: false,
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
  ],
})
