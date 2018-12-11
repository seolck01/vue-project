export default function(router) {
  router.addRoutes([
    { path: '/one', component: () => import('./vue/one.vue') },
    { path: '/two', component: () => import('./vue/two.vue') }
  ])
}
