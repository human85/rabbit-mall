import request from '@/utils/request.js'

// 获取结算信息
export const getCkeckoutInfoAPI = () => {
  return request({
    url: '/member/order/pre'
  })
}

// 提交订单
export const createOrderAPI = data => {
  return request({
    method: 'POST',
    url: '/member/order',
    data
  })
}
