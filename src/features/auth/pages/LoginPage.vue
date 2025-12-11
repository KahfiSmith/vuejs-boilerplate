<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2 text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Authentication</p>
      <h1 class="text-2xl font-semibold text-slate-900">Selamat datang kembali</h1>
      <p class="text-sm text-slate-600">Masuk untuk mengakses dashboard Anda.</p>
    </div>

    <LoginForm />
  </section>
</template>
