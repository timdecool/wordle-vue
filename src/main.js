import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

const app = createApp(App)

app.use(createVuestic({
    config: {
      colors: {
        variables: {
          primary: "#b8c1ec",
          secondary: "#eebbc3",
          success: "#40e583",
          info: "#2c82e0",
          danger: "#e34b4a",
          warning: "#ffc200",
          gray: "#babfc2",
          dark: "#34495e",
        },
      },
    },
  }))
app.use(createPinia())
app.use(router)

app.mount('#app')
