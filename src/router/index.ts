import { createRouter, createWebHistory } from 'vue-router'
import PPLayground from '@/views/PPLayground.vue'

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
            path: '/news',
            name: 'News',
            component: ()=> import('@/views/news/PNews.vue')
        },
        {
          path: '/country/:id',
          name: 'country-single',
          component: ()=> import('@/views/countries/PSingle.vue')
        },
        {
          path: '/playground',
          name: 'playground',
          component: PPLayground
        }
    ]
   }
  ],
})

export default router