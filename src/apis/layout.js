import request from '@/utils/request.js'

// 获取一级分类导航数据
export function getCategoryAPI() {
  return request({
    url: '/home/category/head'
  })
}
