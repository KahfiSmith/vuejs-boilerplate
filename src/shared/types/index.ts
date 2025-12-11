export type Id = string | number

export interface ApiListResponse<T> {
  data: T[]
  total: number
}

export interface PaginatedQuery {
  page?: number
  pageSize?: number
  search?: string
}

export * from '@/shared/types/api.types'
