import request from '@/lib/request'

export const getBanner = () => {
  return request<{ banners: Music.Api.Banner.Get.res }>({ method: 'GET', url: '/banner' })
}