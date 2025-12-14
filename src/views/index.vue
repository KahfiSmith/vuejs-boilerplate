<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { Button } from '@/components/ui'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const pillars = [
  {
    title: 'Feature-first',
    description: 'Co-locate pages, components, and services by feature for natural scaling.',
  },
  {
    title: 'Type safe',
    description: 'Strict TypeScript + alias support keeps imports clean and refactors safe.',
  },
  {
    title: 'Composable',
    description: 'Encapsulate logic with composables and stores, keep views thin and declarative.',
  },
]
</script>

<template>
  <section class="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-center">
    <div class="space-y-5">
      <p class="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
        Vue 3 + Vite + TypeScript
      </p>
      <h1 class="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
        Clean, scalable boilerplate to start shipping features faster.
      </h1>
      <p class="max-w-2xl text-base text-slate-600">
        Feature-first folders, ready-to-use routing, global styles, and Pinia state keep everything
        organized while staying minimal. Extend with your own features and components.
      </p>
      <div class="flex flex-wrap gap-3">
        <RouterLink to="/">
          <Button>View routes</Button>
        </RouterLink>
        <Button variant="secondary" as="a" href="https://router.vuejs.org/" target="_blank">
          Router docs
        </Button>
      </div>
    </div>

    <div
      class="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-indigo-100/60 sm:p-6"
    >
      <header class="flex items-center justify-between">
        <p class="text-sm font-semibold text-slate-500">Example store usage</p>
        <span class="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          Pinia
        </span>
      </header>
      <div class="mt-4 space-y-1">
        <p class="text-4xl font-bold text-slate-900">{{ counter.count }}</p>
        <p class="text-sm text-slate-500">Double: {{ counter.doubleCount }}</p>
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        <Button variant="ghost" @click="counter.increment">Increment</Button>
        <Button variant="secondary" @click="counter.reset()">Reset</Button>
      </div>
    </div>
  </section>

  <section class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-for="pillar in pillars"
      :key="pillar.title"
      class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <h3 class="text-lg font-semibold text-slate-900">{{ pillar.title }}</h3>
      <p class="mt-2 text-sm text-slate-600">{{ pillar.description }}</p>
    </article>
  </section>
</template>
