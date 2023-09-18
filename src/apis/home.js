import request from '@/utils/request.js'

/**
 * @description 获取轮播图数据
 * @param {*} distributionSite 默认1为首页 2为商品
 */
export function getBannerAPI(distributionSite = 1) {
  return request({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

// 获取新鲜好物数据
export function getNewAPI() {
  return request({
    url: '/home/new'
  })
}

// 获取人气推荐数据
export function getHotAPI() {
  return request({
    url: '/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return request({
    url: '/home/goods'
  })
}
