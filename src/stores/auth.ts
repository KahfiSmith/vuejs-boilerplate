import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { authService } from '@/lib/auth/authService'
import { AUTH_TOKEN_STORAGE_KEY, AUTH_USER_STORAGE_KEY, safeGetItem, safeRemoveItem, safeSetItem } from '@/lib/auth/storage'
import type { AuthResponse, LoginPayload, User } from '@/types/api.types'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(safeGetItem(AUTH_TOKEN_STORAGE_KEY))

  const userFromStorage = safeGetItem(AUTH_USER_STORAGE_KEY)
  const user = ref<User | null>(null)
  if (userFromStorage) {
    try {
      user.value = JSON.parse(userFromStorage) as User
    } catch {
      safeRemoveItem(AUTH_USER_STORAGE_KEY)
    }
  }

  const isAuthenticated = computed(() => Boolean(token.value))

  async function login(payload: LoginPayload): Promise<AuthResponse> {
    const response = await authService.login(payload)
    token.value = response.token
    user.value = response.user
    safeSetItem(AUTH_TOKEN_STORAGE_KEY, response.token)
    safeSetItem(AUTH_USER_STORAGE_KEY, JSON.stringify(response.user))
    return response
  }

  function logout() {
    token.value = null
    user.value = null
    safeRemoveItem(AUTH_TOKEN_STORAGE_KEY)
    safeRemoveItem(AUTH_USER_STORAGE_KEY)
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  }
})
