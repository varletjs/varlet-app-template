import { Router, createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupIframeChannel } from './iframeChannel'
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

const { notify } = setupIframeChannel(router)

router.beforeEach((to) => {
  notify(to.fullPath)
})

export default router
