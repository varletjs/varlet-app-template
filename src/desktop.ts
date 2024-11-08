import App from './Desktop.vue'
import { createApp } from 'vue'
import { inMobile } from 'rattail'

import '@/styles/common.less'
import 'virtual:uno.css'

if (inMobile()) {
  window.location.replace('./index.html')
}

const app = createApp(App)

app.mount('#app')
