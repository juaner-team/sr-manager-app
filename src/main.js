import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uView from 'vk-uview-ui'
import router from './router'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(router)
  app.use(createPinia())
  app.use(uView)
  return {
    app
  }
}
