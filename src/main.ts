import { createApp } from 'vue'
import lazyPlugin from 'vue3-lazy'

import { LazyImg } from '@/components/index'

import App from './App.vue'
import router from './router'
import store from './store'


import '@/styles/index.less'

const app = createApp(App)

app.component('LazyImg', LazyImg)


app.use(lazyPlugin, {
  loading: require('@/components/Header/naruto.webp')
}).use(store).use(router).mount('#app')
