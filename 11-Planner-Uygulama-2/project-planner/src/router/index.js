import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddProject',
    
    component: () => import('../views/AddProjectView.vue')
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    props: true,
    
    component: () => import('../views/EditProjectView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
