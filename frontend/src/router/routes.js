
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/home',
        name: 'home',
        component: () => import('pages/home.vue')
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('pages/form.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('pages/table.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
