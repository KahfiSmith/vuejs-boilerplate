<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/shared/components/common/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50 text-slate-900">
    <AppHeader />
    <main class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <RouterView />
    </main>
  </div>
</template>
