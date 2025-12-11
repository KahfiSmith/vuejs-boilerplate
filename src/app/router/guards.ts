import type { Router } from 'vue-router'

import { useAuthStore } from '@/features/auth/stores/authStore'

export function setupRouterGuards(router: Router) {
  router.beforeEach((to) => {
    const authStore = useAuthStore()
    const requiresAuth = Boolean(to.meta?.requiresAuth)
    const guestOnly = Boolean(to.meta?.guestOnly)

    if (requiresAuth && !authStore.isAuthenticated) {
      return {
        name: 'login',
        query: { redirect: to.fullPath },
      }
    }

    if (guestOnly && authStore.isAuthenticated) {
      return { name: 'home' }
    }
  })

  router.afterEach((to) => {
    if (to.meta?.title) {
      document.title = String(to.meta.title)
    }
  })
}
