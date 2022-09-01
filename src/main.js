import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

createApp(App).use(ElementPlus).use(Chartkick.use(Chart)).use(router).mount('#app')
