import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'

import store from './store'
import './style/styles.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueHighlightJS)
app.mount('#app')
