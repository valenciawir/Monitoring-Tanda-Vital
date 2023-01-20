import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */ "@/pages/Home/Home.vue")
const Container = () => import(/* webpackChunkName: "Container" */ '@/layout/Container/Container.vue')
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/pages/Dashboard/Dashboard.vue')
const routes = [
  {
    path: '/',
    name: 'Home-page',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard-page',
    component: Container,
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: 'setting',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
