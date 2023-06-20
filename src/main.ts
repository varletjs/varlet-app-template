import '@/mocks'
import '@varlet/touch-emulator'
import App from './App.vue'
import router from '@/router'
import { i18n } from '@/i18n'
import { createApp } from 'vue'
import { createBounceFixer } from '@varlet/bounce-fixer'

createBounceFixer().enable()

createApp(App).use(router).use(i18n).mount('#app')
