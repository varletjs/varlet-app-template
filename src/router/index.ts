import routes from '~pages'
import stacks from '~stacks'
import { createRouter, createWebHashHistory, Router } from 'vue-router'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/layout/home'
    },
    ...stacks,
    ...routes
  ]
})

export default router
