import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'
import Layout from '../views/layout/Layout.vue'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        ...routes,
        {
          path: '/403',
          name: '403',
          meta: { public: true, title: '403' },
          component: () => import(/* webpackChunkName: "common" */ '../views/not-page/StatusForbidden.vue')
        },
        {
          path: '/:pathMatch(.*)',
          name: '404',
          meta: { public: true, title: '404' },
          component: () => import(/* webpackChunkName: "common" */ '../views/not-page/StatusNotFound.vue')
        }
      ]
    }
  ]
})

router.beforeEach(async (_to, _from, next) => {
  next()
})
export default router
