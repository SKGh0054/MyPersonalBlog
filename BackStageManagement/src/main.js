import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import { router } from "@/router"


import "assets/css/reset.scss";
import "assets/css/common.scss";

import globalInstall from './utils/global.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)


globalInstall(app) // 全局挂载

app.use(createPinia())
app.use(ElementPlus)
app.use(router).mount('#app')