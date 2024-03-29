import App from './App.vue'
import router from '@/router'
import dayjs from 'dayjs'
import { createPinia } from 'pinia'
import { i18n } from '@/i18n'
import { createApp } from 'vue'
import { createBounceFixer } from '@varlet/bounce-fixer'
import { setupAppHeight } from './utils/elements'

import '@/styles/common.less'
import '@varlet/touch-emulator'
import 'virtual:uno.css'

setupAppHeight()

createBounceFixer().enable()

const app = createApp(App)

app.config.globalProperties.$dayjs = dayjs

app.use(router).use(i18n).use(createPinia()).mount('#app')
