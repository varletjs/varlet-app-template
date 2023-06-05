import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/layout/Layout.vue'),
      children: [
        ...routes,
        {
          path: '/403',
          name: '403',
          meta: { public: true, title: '403' },
          component: () => import(/* webpackChunkName: "common" */ '@/views/notPage/Page403.vue')
        },
        {
          path: '/:pathMatch(.*)',
          name: '404',
          meta: { public: true, title: '404' },
          component: () => import(/* webpackChunkName: "common" */ '@/views/notPage/Page404.vue')
        }
      ]
    }
  ]
})

router.beforeEach(async (_to, _from, next) => {
  next()
})
export default router
