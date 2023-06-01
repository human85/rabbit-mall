import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送前做点什么
    return config
  },
  error => {
    // 对请求错误做点什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 2×× 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response
  },
  error => {
    // 超出 2×× 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
