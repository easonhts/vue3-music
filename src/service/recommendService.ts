import request from '@/lib/request'

/**
 * banner图
 */
export const getBanner = () => {
  return request<{ banners: Music.Api.Banner.Get.res }>({ method: 'GET', url: '/banner' })
}

/**
 * 获取推荐歌单
 */
export const getRecommendList = (params?: Music.Api.Personalized.Get.Req) => {
  return request<{ result: Music.Api.Personalized.Get.Res }>({ method: 'GET', url: '/personalized', params })
}
