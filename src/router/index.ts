import { setupLayouts } from 'virtual:generated-layouts'
// eslint-disable-next-line import-x/no-duplicates
import { createRouter, createWebHashHistory, Router } from 'vue-router'
// eslint-disable-next-line import-x/no-duplicates
import { routes } from 'vue-router/auto-routes'
import { setupDesktopChannel } from './desktopChannel'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...setupLayouts(routes),
  ],
})

router.isReady().then(() => {
  setupDesktopChannel(router)
})

export default router
