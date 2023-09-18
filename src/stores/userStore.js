// 管理用户数据相关
import { loginAPI } from '@/apis/user.js'
import { mergeCartAPI } from '@/apis/cart.js'
import { useCartStore } from '@/stores/cartStore.js'

export const useUserStore = defineStore(
  'user',
  () => {
    // 登录 获取用户信息
    const userInfo = ref({})
    const cartStore = useCartStore()

    const getUserInfo = async ({ account, password }) => {
      const { data } = await loginAPI({ account, password })
      userInfo.value = data.result
      // 合并购物车
      const cartData = cartStore.cartList.map(item => ({
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }))
      await mergeCartAPI(cartData)
      // 更新本地购物车
      cartStore.updateCartList()
    }

    // 退出登录 清空用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
      // 清空本地购物车
      cartStore.clearCartList()
    }

    return { userInfo, getUserInfo, clearUserInfo }
  },
  { persist: true }
)
