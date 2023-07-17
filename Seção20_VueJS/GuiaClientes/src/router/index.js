import { createRouter, createWebHistory } from 'vue-router'
import Cliente from '../components/Cliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Cliente
    }
  ]
})

export default router
