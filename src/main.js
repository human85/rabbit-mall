import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyPlugin } from '@/directives/index.js'
import { componentsPlugin } from '@/components/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
// 注册全局图片懒加载指令
app.use(imgLazyPlugin)
// 注册全局组件
app.use(componentsPlugin)

app.use(pinia)
app.use(router)

app.mount('#app')
