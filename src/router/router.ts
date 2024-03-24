import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login.vue')
      
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/Dashboard.vue')
          
        }, 
        {
          path: 'anggota',
          name: 'Anggota',
          component: () => import('@/views/Anggota/Anggota.vue')
        
        }, 
      ]
    }
  ]
})

export default router
