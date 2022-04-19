import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/home/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/activity',
          name: 'activity',
          component: () => import("@/views/activity/Index.vue")
        },
      ]
    },


  ]
})

export default router
