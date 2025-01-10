import { createApp } from 'vue'
import { createBounceFixer } from '@varlet/bounce-fixer'
import dayjs from 'dayjs'
import { createPinia } from 'pinia'
import { i18n } from '@/i18n'
import router from '@/router'
import { setupAppHeight } from '@/utils'
import App from './App.vue'
import '@/styles/common.less'
import '@varlet/touch-emulator'
import 'virtual:uno.css'
import 'virtual-icons'

setupDesktopInMobile()
setupAppHeight()
createBounceFixer().enable()

const app = createApp(App)

app.config.globalProperties.$dayjs = dayjs

app.use(router).use(i18n).use(createPinia()).mount('#app')
