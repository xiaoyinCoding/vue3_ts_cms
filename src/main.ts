import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/register_icons'

// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

app.use(registerIcons)
app.use(router)
app.use(pinia)
app.mount('#app')
