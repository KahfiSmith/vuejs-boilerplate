# Vue 3 Boilerplate

Vue 3 + Vite + TypeScript boilerplate dengan struktur mirip React (components/views/lib/providers), tapi tetap mengikuti pola Vue: `layouts/`, `views/`, dan `composables/`.

## Struktur folder

```
.
├─ docs/
│  └─ API.MD
├─ providers/
│  └─ index.ts                # register Pinia + Router (app providers)
├─ public/                    # aset statis
└─ src/
   ├─ components/             # reusable components
   │  ├─ common/
   │  ├─ features/
   │  └─ ui/
   ├─ layouts/                # layout wrappers untuk route groups
   ├─ views/                  # pages (Vue idiom: views)
   ├─ router.ts               # router + guards + title
   ├─ composables/            # hooks versi Vue (composables)
   ├─ stores/                 # Pinia stores
   ├─ lib/                    # reusable modules (api/auth/utils/schemas)
   ├─ types/                  # shared types
   ├─ styles/                 # css tokens
   ├─ App.vue
   ├─ main.ts
   └─ index.css               # global styles (Tailwind entry)
```

## Script

```sh
pnpm dev        # dev server
pnpm type-check # vue-tsc
pnpm build      # type-check + vite build
pnpm lint       # eslint (no --fix)
pnpm lint:fix   # eslint --fix
pnpm format     # prettier src/ providers/ docs/
```

## Catatan

- Jika `pnpm build` error `@rollup/rollup-<platform>`, biasanya karena `node_modules` terinstall untuk OS yang berbeda (mis. Windows vs WSL/Linux). Solusi: reinstall dependency pada environment yang sama dengan yang dipakai untuk menjalankan Node.
