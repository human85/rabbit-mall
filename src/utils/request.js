import axios from 'axios'
import { useUserStore } from '@/stores/userStore.js'
import router from '@/router/index.js'
// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  },
  error => {
    // 对请求错误做点什么
    return Promise.reject(error)
  }
)
axios.get()
// 响应拦截器
request.interceptors.response.use(
  response => {
    // 2×× 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response
  },
  error => {
    const userStore = useUserStore()
    // 超出 2×× 范围的状态码都会触发该函数
    // 对响应错误做点什么
    ElMessage({
      type: 'error',
      message: error.response.data.message
    })
    // 401 token 失效处理
    if (error.response.status === 401) {
      // 清除本地用户数据
      userStore.clearUserInfo()
      // 跳转登录页
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default request
