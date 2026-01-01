import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'

// Optional icons
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(vuetify)
  .mount('#app')
