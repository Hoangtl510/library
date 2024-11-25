import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SharedInput from './shared/input.vue'
import './assets/color.css'
const app = createApp(App)

app.component('shared-input', SharedInput)

app.mount('#app')