export const AUTH_TOKEN_STORAGE_KEY = 'auth.token'
export const AUTH_USER_STORAGE_KEY = 'auth.user'

export function safeGetItem(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function safeSetItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore write errors (private mode / quota / disabled storage)
  }
}

export function safeRemoveItem(key: string) {
  try {
    localStorage.removeItem(key)
  } catch {
    // ignore
  }
}

