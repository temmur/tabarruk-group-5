
import { createRouter, createWebHistory } from 'vue-router'
import PPLayground from '@/views/PPLayground.vue'

 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutDefault',
      component: () => import('@/layouts/LDefault.vue'),
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
          path: '', // Changed from '/' to '' so it inherits the parent path
          name: 'Home',
          component: () => import('@/views/PHome.vue'),
          meta: { breadcrumb: 'Home' }
        },
        {
          path: 'news',
          name: 'News',
          component: () => import('@/views/news/PNews.vue'),
          meta: { breadcrumb: 'News' }
        },
        {
          path: 'news/:id',
          name: 'news-single',
          component: () => import('@/views/news/PNewsSingle.vue'),
          meta: { 
            // Use a function for dynamic labels
            breadcrumb: (route: any) => `News Item ${route.params.id}` 
          }
        },
        {
          path: 'country/:id',
          name: 'country-single',
          component: () => import('@/views/countries/PSingle.vue'),
          meta: { 
            breadcrumb: (route:any) => `Country ${route.params.id}` 
          }
        },
        {
          path: 'playground',
          name: 'playground',
          component: PPLayground,
          meta: { breadcrumb: 'Playground' }
        },
        {
          path: 'faq',
          name: 'faq',
          component: ()=> import('@/views/PFaq.vue')
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