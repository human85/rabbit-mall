import request from '@/utils/request.js'

// 合并购物车
export const mergeCartAPI = data => {
  return request({
    method: 'POST',
    url: '/member/cart/merge',
    data
  })
}

// 更新本地购车
export const updateCartListAPI = () => {
  return request({
    url: '/member/cart'
  })
}

// 加入购物车
export const addToCartAPI = ({ skuId, count }) => {
  return request({
    method: 'POST',
    url: '/member/cart',
    data: {
      skuId,
      count
    }
  })
}

// 删除购物车
export const delCartAPI = ids => {
  return request({
    method: 'DELETE',
    url: '/member/cart',
    data: {
      ids
    }
  })
}
