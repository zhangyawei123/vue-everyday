import axios from 'axios'
import Qs from 'qs'
import router from '../router'
import { Loading } from 'element-ui'

// 主地址
// axios.defaults.baseURL = String(process.env.API_HOST)
axios.defaults.timeout = 15000
axios.defaults.withCredentials = true
axios.defaults.transformRequest = [function (data) {
  data = Qs.stringify(data)
  return data
}]

// 那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0
let fullLoading
export const showLoading = () => {
  if (needLoadingRequestCount === 0) {
    fullLoading = Loading.service()
  }
  needLoadingRequestCount++
}

export const tryHideLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    fullLoading.close()
  }
}

axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (sessionStorage.getItem('token')) {
      config.headers.token = sessionStorage.getItem('token')
    }
    showLoading()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http request 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 403) {
      router.push({path: '/'})
    } else if (response.data.code === 500) {
      // console.log(response.data.msg);
    }
    tryHideLoading()
    return response
  },
  error => {
    console.log(error)
  }
)

export default axios
