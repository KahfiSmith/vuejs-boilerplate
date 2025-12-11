import type { RouteRecordRaw } from 'vue-router'

import { getDevRoutes } from '@/app/dev/devRoutes'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/app/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/features/home/pages/HomePage.vue'),
        meta: { title: 'Home' },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/app/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/features/auth/pages/LoginPage.vue'),
        meta: { title: 'Login', guestOnly: true },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/features/misc/pages/NotFoundPage.vue'),
    meta: { title: 'Page Not Found' },
  },
]

export const routes: RouteRecordRaw[] = [...baseRoutes, ...getDevRoutes()]
