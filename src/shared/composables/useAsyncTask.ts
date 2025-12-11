import { ref } from 'vue'

export function useAsyncTask<TArgs extends unknown[], TResult>(
  task: (...args: TArgs) => Promise<TResult>,
) {
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const run = async (...args: TArgs) => {
    loading.value = true
    error.value = null
    try {
      return await task(...args)
    } catch (err) {
      error.value = err as Error
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, run }
}
