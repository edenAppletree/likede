import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { getTokenTime } from './auth'

// 创建axios接口
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000 
})


// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    const tokenTime = getTokenTime()
    const currentTime = Date.now()
    const timeout = 5* 1000
    if (store.state.user.token) {
      if (currentTime - tokenTime > timeout) {
        await store.dispatch('user/logout')
        router.push('/login')
         return Promise.reject(new Error('登录过期'))
      } else {
        config.headers.Authorization = store.state.user.token;
      }
    }
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

// 响应拦截器
// service.interceptors.response.use(
//   res => {
//     const { msg, success } = res.data
//     if (success) {
      
//     }
//  }
// );

export default service
