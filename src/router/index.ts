import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "recommend" */ '@/views/recommend/index.vue')
const Search = () => import(/* webpackChunkName: "search" */ '@/views/search/index.vue')
const TopList = () => import(/* webpackChunkName: "top-list" */ '@/views/top-list/index.vue')
const Singer = () => import(/* webpackChunkName: "singer" */ '@/views/singer/index.vue')
const SingerDetail = () => import(/* webpackChunkName: "SingerDetail" */ '@/views/singer/detail.vue')

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
