import request from '@/lib/request'

type SingerList = Music.Utils.Response.Pagination.Data<{ artists: Music.Api.Singer.HotList.Get.Res }>

/**
 * 获取热门歌手列表
 */
export const getHotSingerList = (params?: Music.Utils.Request.Pagination.Params) => {
  return request<SingerList>({
    method: 'GET',
    url: '/top/artists',
    params
  })
}

/**
 * 获取歌手列表
 */
export const getSingerList = (params: Music.Utils.Request.Pagination.Params & Music.Api.Singer.List.Get.Req) => {
  return request<SingerList>({ method: 'GET', url: '/artist/list', params })
}


/**
 * 歌手详情
 * /artists
 */


/**
 * 获取歌曲url
 * /song/detail?ids=
 */