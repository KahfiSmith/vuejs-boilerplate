<script setup lang="ts">
const modelValue = defineModel<string | number | null>({ default: '' })

defineProps<{
  label?: string
  name?: string
  type?: string
  placeholder?: string
  required?: boolean
}>()
</script>

<template>
  <label class="block space-y-1.5">
    <span v-if="label" class="text-sm font-medium text-slate-700">{{ label }}</span>
    <input
      v-model="modelValue"
      class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 focus:ring-offset-1"
      :type="type ?? 'text'"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      v-bind="$attrs"
    />
  </label>
</template>
