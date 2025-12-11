import { storeToRefs } from 'pinia'

import { useAuthStore } from '@/features/auth/stores/authStore'
import type { LoginPayload } from '@/shared/types/api.types'

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
