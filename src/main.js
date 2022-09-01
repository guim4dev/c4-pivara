import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Chartkick from 'vue-chartkick'
import 'chartkick/chart.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Chartkick)
app.mount('#app')
