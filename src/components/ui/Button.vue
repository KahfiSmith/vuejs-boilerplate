<script setup lang="ts">
import { computed, toRefs } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    as?: 'button' | 'a'
    variant?: Variant
    size?: Size
  }>(),
  {
    as: 'button',
    variant: 'primary',
    size: 'md',
  },
)

const { as, variant, size } = toRefs(props)

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
  {
    'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500': variant.value === 'primary',
    'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-300':
      variant.value === 'secondary',
    'text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-300': variant.value === 'ghost',
  },
  {
    'px-3 py-1.5 text-sm': size.value === 'sm',
    'px-4 py-2 text-sm': size.value === 'md',
    'px-5 py-2.5 text-base': size.value === 'lg',
  },
])
</script>

<template>
  <component :is="as" :class="classes" v-bind="$attrs">
    <slot />
  </component>
</template>
