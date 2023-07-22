import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path:'/:pathMatch(.*)*', 
    redirect: 'frontend/index.html'
  }
  
]

let router = createRouter({
  history: createWebHistory('/home/aperion/frappe-bench/apps/production/production/public/frontend'),
  routes,
})

export default router