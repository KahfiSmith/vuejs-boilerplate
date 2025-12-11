<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Button, Input } from '@/shared/components/ui'
import { useAuth } from '@/shared/composables/useAuth'
import { isEmail, isMinLength } from '@/shared/lib/validators'

const form = reactive({
  email: '',
  password: '',
})

const error = ref('')
const loading = ref(false)

const { login } = useAuth()
const router = useRouter()
const route = useRoute()

const handleSubmit = async () => {
  error.value = ''

  if (!isEmail(form.email)) {
    error.value = 'Email tidak valid'
    return
  }

  if (!isMinLength(form.password, 6)) {
    error.value = 'Password minimal 6 karakter'
    return
  }

  loading.value = true
  try {
    await login({ email: form.email, password: form.password })
    const redirect = (route.query.redirect as string | undefined) ?? '/'
    router.push(redirect)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Gagal login'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div class="space-y-2">
      <h1 class="text-2xl font-semibold text-slate-900">Masuk</h1>
      <p class="text-sm text-slate-600">Gunakan akun demo untuk melanjutkan.</p>
    </div>

    <Input v-model="form.email" label="Email" name="email" placeholder="you@mail.com" required />
    <Input
      v-model="form.password"
      label="Password"
      name="password"
      type="password"
      placeholder="••••••••"
      required
    />

    <p v-if="error" class="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
      {{ error }}
    </p>

    <Button class="w-full" :disabled="loading">
      {{ loading ? 'Memproses...' : 'Login' }}
    </Button>
  </form>
</template>
