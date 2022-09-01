import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Chartkick.use(Chart))
app.mount('#app')
