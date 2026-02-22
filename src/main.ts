import { createApp } from 'vue'

import App from '@/App.vue'
import '@/styles/main.css'

import { registerProviders } from '../providers'

const app = createApp(App)

registerProviders(app)

app.mount('#app')

if (import.meta.hot) {
  import.meta.hot.accept()
}
