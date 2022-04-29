import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Recommend from '@/views/recommend/index.vue'
import Search from '@/views/search/index.vue'
import TopList from '@/views/top-list/index.vue'
import Singer from '@/views/singer/index.vue'
import SingerDetail from '@/views/singer/detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: 'detail/:id',
        component: SingerDetail
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
