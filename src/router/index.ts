import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'HomePhone',
        component: () => import('@/views/home/PhoneView.vue'),
      },
      {
        path: '',
        name: 'HomeFinance',
        component: () => import('@/views/home/FinanceView.vue'),
      },
      {
        path: '',
        name: 'HomeBill',
        component: () => import('@/views/home/BillView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
