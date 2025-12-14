import { apiClient, apiEndpoints } from '@/lib/api'
import type { AuthResponse, LoginPayload } from '@/types/api.types'

const MOCK_RESPONSE: AuthResponse = {
  token: 'dev-token',
  user: {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
  },
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    if (!import.meta.env.VITE_API_BASE_URL) {
      return Promise.resolve({ ...MOCK_RESPONSE, user: { ...MOCK_RESPONSE.user, email: payload.email } })
    }

    return apiClient.post<AuthResponse, LoginPayload>(apiEndpoints.auth.login, payload)
  },
}
