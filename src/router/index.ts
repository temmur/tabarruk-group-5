import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
   {
    path: '/',
    name: 'LayoutDefault', 
    component: ()=> import('@/layouts/LDefault.vue'),
    children: [
        {
            path: '/',
            name: 'Home',
            alias: ['Home', 'Main'],
            component: ()=> import('@/views/PHome.vue')
        },
        {
          path: '/country/:id',
          name: 'country-single',
          component: ()=> import('@/views/countries/PSingle.vue')
        }
    ]
   }
  ],
})

export default router