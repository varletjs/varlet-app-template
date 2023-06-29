import routes from '~pages'
import { createRouter, createWebHistory, Router } from 'vue-router'

console.log(routes)

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/layout/home'
    },
    ...routes
  ]
})

export default router
