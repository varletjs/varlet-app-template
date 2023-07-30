import routes from '~pages'
import { createRouter, createWebHashHistory, Router } from 'vue-router'

console.log(routes)

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

export default router
