import App from './App.vue'
import router from '@/router'
import { i18n } from '@/i18n'
import { createApp } from 'vue'
import { createBounceFixer } from '@varlet/bounce-fixer'
import { setupAppHeight } from './utils/elements'

import '@/mocks'
import '@/styles/common.less'
import '@varlet/touch-emulator'

setupAppHeight()

createBounceFixer().enable()

createApp(App).use(router).use(i18n).mount('#app')
