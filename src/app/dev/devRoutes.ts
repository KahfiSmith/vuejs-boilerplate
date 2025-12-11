import type { RouteRecordRaw } from 'vue-router'

// Dev-only routes to preview components without touching production paths.
export function getDevRoutes(): RouteRecordRaw[] {
  if (!import.meta.env.DEV) return []

  return [
    {
      path: '/__dev',
      component: () => import('@/app/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'dev-sandbox',
          component: () => import('@/app/dev/ComponentSandbox.vue'),
          meta: { title: 'Dev Sandbox', hidden: true },
        },
      ],
    },
  ]
}
