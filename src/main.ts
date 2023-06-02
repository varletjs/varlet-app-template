import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

createApp(App).use(Varlet).mount('#app')
