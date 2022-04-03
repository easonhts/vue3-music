import { createApp } from 'vue'
import lazyPlugin from 'vue3-lazy'
import { createPinia } from 'pinia'

import { LazyImg } from '@/components/index'

import App from './App.vue'
import router from './router'

import lazyLoading from '@/components/Header/naruto.webp'

import '@/styles/index.less'

const app = createApp(App)

app.component('LazyImg', LazyImg)

app
  .use(lazyPlugin, {
    loading: lazyLoading
  })
  .use(router)
  .use(createPinia())
  .mount('#app')
