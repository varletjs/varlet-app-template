import { Router, createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupDesktopChannel } from './desktopChannel'
import { setupLayouts } from 'virtual:generated-layouts'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...setupLayouts(routes)
  ]
})

router.isReady().then(() => {
  setupDesktopChannel(router)
})

export default router
