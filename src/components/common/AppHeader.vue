<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { Button } from '@/components/ui'
import { APP_NAME } from '@/config'
</script>

<template>
  <header class="border-b border-slate-200 bg-white/70 backdrop-blur">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-semibold text-white">
          V
        </span>
        <div class="space-y-0.5">
          <p class="text-sm font-semibold text-slate-900">{{ APP_NAME }}</p>
          <p class="text-xs text-slate-500">Vue 3 boilerplate</p>
        </div>
      </RouterLink>

      <nav class="flex items-center gap-3">
        <RouterLink to="/" class="text-sm font-medium text-slate-700 hover:text-indigo-600">
          Home
        </RouterLink>
        <RouterLink to="/auth/login" class="text-sm font-medium text-slate-700 hover:text-indigo-600">
          Login
        </RouterLink>
        <Button variant="secondary" as="a" href="https://vitejs.dev" target="_blank"> Docs </Button>
      </nav>
    </div>
  </header>
</template>
