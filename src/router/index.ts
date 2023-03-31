import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Vehicles from '@/views/Vehicles.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: Vehicles
    }
  ]
})

export default router
