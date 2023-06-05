const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { title: 'tabbar.home', keepAlive: true },
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/Home.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: { title: 'tabbar.list', keepAlive: true },
    component: () => import(/* webpackChunkName: "List" */ '@/views/list/List.vue')
  }
]
export default routes
