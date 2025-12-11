<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid min-h-screen grid-rows-[auto,1fr] bg-slate-50 text-slate-900">
    <header class="border-b border-slate-200 bg-white/60 backdrop-blur">
      <div class="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-semibold text-white">
            A
          </span>
          <div>
            <p class="text-sm font-semibold text-slate-900">Auth Area</p>
            <p class="text-xs text-slate-500">Login to continue</p>
          </div>
        </div>
        <RouterView name="header" />
      </div>
    </header>
    <main class="flex items-center justify-center px-4 py-10">
      <div class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-indigo-100/60">
        <RouterView />
      </div>
    </main>
  </div>
</template>
