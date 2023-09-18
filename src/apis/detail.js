import request from '@/utils/request.js'

// 获取-商品详情
export function getDetailAPI(id) {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */

export function getHotGoodsAPI({ id, type, limit }) {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
