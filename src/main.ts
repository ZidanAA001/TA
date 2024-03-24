import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import axios from 'axios'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router/router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

//interceptors req
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

//interceptors res
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.error(error)
    return Promise.reject(error)
})

library.add(fas, far, fab);

const app = createApp(App);

app.component('fa', FontAwesomeIcon)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
