
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

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 } 
    }
  }
})


export default router