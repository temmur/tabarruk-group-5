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
            path: '/news',
            name: 'News',
            component: ()=> import('@/views/news/PNews.vue')
        }
    ]
   }
  ],
})

export default router