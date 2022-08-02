import axios from 'axios'
import store from '@/store'

// 创建axios接口
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 5000 
})


// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      config.headers.Authorization = store.state.user.token;
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
