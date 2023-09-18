// 封装用户数据相关的 api
import request from '@/utils/request.js'

export const loginAPI = ({ account, password }) => {
  return request({
    method: 'POST',
    url: '/login',
    data: {
      account,
      password
    }
  })
}

// 猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
