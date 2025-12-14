import { AUTH_TOKEN_STORAGE_KEY, safeGetItem } from '@/lib/auth/storage'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface RequestOptions<TBody> extends Omit<RequestInit, 'method' | 'body'> {
  query?: Record<string, string | number | boolean | undefined>
  body?: TBody
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

const toQueryString = (query?: RequestOptions<unknown>['query']) => {
  if (!query) return ''
  const params = new URLSearchParams()
  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined) return
    params.set(key, String(value))
  })
  return `?${params.toString()}`
}

async function request<TResponse = unknown, TBody = unknown>(
  path: string,
  method: HttpMethod,
  options: RequestOptions<TBody> = {},
): Promise<TResponse> {
  const { body, query, headers, ...rest } = options
  const url = `${API_BASE_URL}${path}${toQueryString(query)}`

  const mergedHeaders = new Headers(headers)
  if (body) {
    mergedHeaders.set('Content-Type', 'application/json')
  }

  const token = safeGetItem(AUTH_TOKEN_STORAGE_KEY)
  if (token && !mergedHeaders.has('Authorization')) {
    mergedHeaders.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: mergedHeaders,
    ...rest,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `Request failed with status ${response.status}`)
  }

  if (response.status === 204) {
    return undefined as TResponse
  }

  return (await response.json()) as TResponse
}

export const apiClient = {
  get<TResponse>(path: string, options?: RequestOptions<never>) {
    return request<TResponse>(path, 'GET', options)
  },
  post<TResponse, TBody = unknown>(path: string, body: TBody, options?: RequestOptions<TBody>) {
    return request<TResponse, TBody>(path, 'POST', { ...options, body })
  },
  put<TResponse, TBody = unknown>(path: string, body: TBody, options?: RequestOptions<TBody>) {
    return request<TResponse, TBody>(path, 'PUT', { ...options, body })
  },
  patch<TResponse, TBody = unknown>(path: string, body: TBody, options?: RequestOptions<TBody>) {
    return request<TResponse, TBody>(path, 'PATCH', { ...options, body })
  },
  delete<TResponse>(path: string, options?: RequestOptions<never>) {
    return request<TResponse>(path, 'DELETE', options)
  },
}
