import { storeToRefs } from 'pinia'

import { useAuthStore } from '@/stores/auth'
import type { LoginPayload } from '@/types/api.types'

export function useAuth() {
  const authStore = useAuthStore()

  const { isAuthenticated, user } = storeToRefs(authStore)

  const login = (payload: LoginPayload) => authStore.login(payload)
  const logout = () => authStore.logout()

  return {
    isAuthenticated,
    user,
    login,
    logout,
  }
}
