import '@/mocks'
import '@varlet/touch-emulator'
import { i18n } from '@/i18n'
import App from '../pages/App.vue'
import { createApp } from 'vue'
import { createBounceFixer } from '@varlet/bounce-fixer'

createBounceFixer().enable()

createApp(App).use(i18n).mount('#app')
