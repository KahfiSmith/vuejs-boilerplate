import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { authService } from '@/features/auth/services/authService'
import type { AuthResponse, LoginPayload, User } from '@/shared/types/api.types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)

  const isAuthenticated = computed(() => Boolean(token.value))

  async function login(payload: LoginPayload): Promise<AuthResponse> {
    const response = await authService.login(payload)
    token.value = response.token
    user.value = response.user
    return response
  }

  function logout() {
    token.value = null
    user.value = null
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  }
})
