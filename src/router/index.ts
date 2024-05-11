import { Router, createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { registryRouterChannel } from './channel'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/layout/home'
    },
    ...routes
  ]
})

const { notify } = registryRouterChannel(router)

router.beforeEach((to) => {
  console.log(to.path)
  notify(to.fullPath)
})

export default router
