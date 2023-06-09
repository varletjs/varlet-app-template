const routes = [
  {
    path: '/layout/home',
    name: 'home',
    meta: { title: 'home', keepAlive: true },
    component: () => import(/* webpackChunkName: "Home" */ '../pages/layout/home.vue')
  },
  {
    path: '/layout/list',
    name: 'list',
    meta: { title: 'list', keepAlive: true },
    component: () => import(/* webpackChunkName: "List" */ '../pages/layout/home/list.vue')
  }
]
export default routes
