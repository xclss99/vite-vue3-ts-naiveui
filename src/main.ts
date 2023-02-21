import { createApp } from 'vue'
import App from './App.vue'
import { setupNaiveUI } from './plugins'

import './assets/styles/main.css'

const app = createApp(App)

// Tree Shaking
setupNaiveUI(app)

app.mount('#app')