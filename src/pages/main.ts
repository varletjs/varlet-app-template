import '@varlet/touch-emulator'
import App from '../pages/App.vue'
import { createApp } from 'vue'
import { createBounceFixer } from '@varlet/bounce-fixer'

createBounceFixer().enable()

createApp(App).mount('#app')
