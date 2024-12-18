import { createRouter, createWebHistory } from 'vue-router'
import page from '@/views/page.vue'
const routes = [{ path: '/', name: 'Home', component: page }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
