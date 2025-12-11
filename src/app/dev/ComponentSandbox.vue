<script setup lang="ts">
import { ref } from 'vue'

import { Button, Input } from '@/shared/components/ui'

const name = ref('Alex Doe')
const note = ref('Boilerplate dev sandbox')
const clicks = ref(0)

const handleSubmit = () => {
  clicks.value += 1
}
</script>

<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Dev sandbox</p>
        <h1 class="text-2xl font-semibold text-slate-900">Component preview</h1>
        <p class="text-sm text-slate-600">Tempat cepat untuk mencoba UI tanpa menyentuh flow utama.</p>
      </div>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Local only</span>
    </div>

    <div class="grid gap-4 rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm md:grid-cols-[1.1fr,1fr] md:items-center">
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <Input v-model="name" label="Nama" name="name" placeholder="Isi nama" />
        <Input v-model="note" label="Catatan" name="note" placeholder="Catatan singkat" />
        <div class="flex gap-2">
          <Button type="submit">Simpan</Button>
          <Button variant="secondary" type="button" @click="clicks = 0">Reset</Button>
        </div>
      </form>

      <div class="space-y-3 rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4">
        <p class="text-sm font-semibold text-slate-800">State preview</p>
        <ul class="space-y-1 text-sm text-slate-700">
          <li><span class="font-semibold text-slate-900">Nama:</span> {{ name }}</li>
          <li><span class="font-semibold text-slate-900">Catatan:</span> {{ note }}</li>
          <li><span class="font-semibold text-slate-900">Klik submit:</span> {{ clicks }}</li>
        </ul>
        <div class="flex gap-2 pt-2">
          <Button size="sm" variant="ghost" @click="handleSubmit">Tambah klik</Button>
          <Button size="sm" variant="secondary" @click="clicks = 0">Clear</Button>
        </div>
      </div>
    </div>
  </section>
</template>
