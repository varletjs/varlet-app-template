const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { title: 'home', keepAlive: true },
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/Home.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: { title: 'list', keepAlive: true },
    component: () => import(/* webpackChunkName: "List" */ '../views/list/List.vue')
  }
]
export default routes
