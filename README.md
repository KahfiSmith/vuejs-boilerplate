# Gambaran Struktur Proyek

Boilerplate Vue 3 (Vite + TypeScript) dengan pola feature-first, router terorganisir, guard, dan Pinia.

## Struktur folder

```
.
├─ public/                    # aset statis
├─ src/
│  ├─ app/                    # application shell
│  │  ├─ App.vue
│  │  ├─ main.ts
│  │  ├─ dev/                 # util/sandbox khusus mode dev
│  │  │  ├─ ComponentSandbox.vue
│  │  │  └─ devRoutes.ts
│  │  ├─ layouts/
│  │  │  ├─ DefaultLayout.vue
│  │  │  └─ AuthLayout.vue
│  │  ├─ router/
│  │  │  ├─ index.ts          # router instance + guard setup
│  │  │  ├─ routes.ts         # definisi routes
│  │  │  └─ guards.ts         # navigation guards
│  │  └─ styles/
│  │     ├─ main.css
│  │     └─ variables.css     # token warna/spacing
│  │
│  ├─ features/               # modul per fitur/domain
│  │  ├─ auth/
│  │  │  ├─ components/LoginForm.vue
│  │  │  ├─ pages/LoginPage.vue
│  │  │  ├─ services/authService.ts
│  │  │  └─ stores/authStore.ts
│  │  ├─ home/pages/HomePage.vue
│  │  └─ misc/pages/NotFoundPage.vue
│  │
│  └─ shared/                 # utilitas lintas fitur
│     ├─ components/
│     │  ├─ common/AppHeader.vue
│     │  └─ ui/{Button.vue,Input.vue}
│     ├─ composables/{useAsyncTask.ts,useAuth.ts}
│     ├─ constants/index.ts
│     ├─ lib/{utils.ts,validators.ts}
│     ├─ services/
│     │  ├─ api/index.ts
│     │  └─ httpClient.ts
│     ├─ stores/counter.ts
│     └─ types/{index.ts,api.types.ts}
│
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig*.json
├─ vite.config.ts
└─ .env.example
```

## Catatan utama

- Router: `routes.ts` mendefinisikan rute, `guards.ts` menangani meta `requiresAuth` dan `guestOnly`, serta update `document.title`.
- Dev sandbox: rute `/__dev` hanya aktif di `import.meta.env.DEV` untuk coba komponen lewat `ComponentSandbox.vue`.
- Layout: `DefaultLayout` untuk halaman utama, `AuthLayout` untuk login/register.
- Shared UI: komponen dasar (`Button`, `Input`) dan komponen umum (`AppHeader`) bisa dipakai lintas fitur.
- Auth contoh: `features/auth` berisi page, form, store Pinia, dan service API dengan fallback mock.
- Styling: token warna/spacing di `variables.css`, gaya dasar di `main.css`.

## Script dasar

```sh
pnpm install   # instal dependensi
pnpm dev       # jalankan dev server
pnpm build     # type-check + build produksi
pnpm lint      # jalankan eslint
pnpm format    # jalankan prettier di src/
```
