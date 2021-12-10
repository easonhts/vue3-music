/* eslint-disable no-empty */
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ERROR_CODE } from './constant'

const axiosInstance = axios.create()

function addTokenInterceptor(conf: AxiosRequestConfig) {
  return conf
}

function loginInterceptor<T>(res: AxiosResponse<Music.Utils.Response.Music<T>>) {
  const { code } = res.data

  //  未登录
  if (code === ERROR_CODE.NOT_LOGIN) {
    // 携带当前uri跳转登陆页
    throw new Error('未登录')
  }

  // 登陆过期 强制跳转登陆
  if (code === ERROR_CODE.FORCE_LOGIN) {
    // 携带当前uri跳转登陆页
    throw new Error('强制登陆')
  }
}

axiosInstance.interceptors.request.use(addTokenInterceptor)

const responseInterceptors = [loginInterceptor]

responseInterceptors.forEach((interceptor) => axiosInstance.interceptors.response.use(interceptor))

type ErrorCallback = (data: Music.Utils.Response.Music<unknown>) => any

function request<T = any>(params: AxiosRequestConfig): Promise<T>
function request<T = any, K extends ErrorCallback = ErrorCallback>(
  params: AxiosRequestConfig,
  errorCallback?: K
): Promise<T | void>
function request<T = any, K extends ErrorCallback = ErrorCallback>(
  params: AxiosRequestConfig,
  errorCallback?: K
): Promise<T | void> {
  if (!params.method || params.method.toLocaleLowerCase() === 'get') {
    params.params = params.params || params.data
  }

  return axiosInstance({
    ...params
  }).then((res) => {
    const { success, data } = res.data as Music.Utils.Response.Music<T>
    if (success) {
      return data
    }

    if (errorCallback) errorCallback(res.data)

    throw res.data
    // throw res
  })
}

export default request
