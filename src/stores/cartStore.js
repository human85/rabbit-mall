import { updateCartListAPI, addToCartAPI, delCartAPI } from '@/apis/cart.js'
import { useUserStore } from './userStore'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    // 登录状态
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])

    // 更新购物车
    const updateCartList = async () => {
      const { data } = await updateCartListAPI()
      cartList.value = data.result
    }

    // 清空本地购物车
    const clearCartList = () => {
      cartList.value = []
    }

    // 添加商品
    const addToCart = async good => {
      const { skuId, count } = good
      if (isLogin.value) {
        // 调用加入购物车接口
        await addToCartAPI({ skuId, count })
        // 更新本地购物车
        updateCartList()
      } else {
        // 购物车内已有则 count 增加
        const item = cartList.value.find(item => item.skuId === skuId)
        if (item) {
          item.count += count
        } else {
          // 购物车内无则 push
          cartList.value.push(good)
        }
      }
    }

    // 删除购物车内商品
    const delCart = async skuId => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        updateCartList()
      } else {
        const i = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(i, 1)
      }
    }

    // 单选功能
    const singleCheck = good => {
      good.selected = !good.selected
    }

    // 全选功能
    const allSelected = computed(() => cartList.value.every(item => item.selected))
    const allCheck = selected => {
      cartList.value.forEach(item => (item.selected = selected))
    }

    // 总数量
    const totalCount = computed(() => cartList.value.reduce((p, c) => p + c.count, 0))
    // 总金额
    const totalPrice = computed(() => cartList.value.reduce((p, c) => p + c.price * c.count, 0).toFixed(2))
    // 已选商品数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((p, c) => p + c.count, 0))
    // 已选商品价格
    const selectedPrice = computed(() =>
      cartList.value
        .filter(item => item.selected)
        .reduce((p, c) => p + c.price * c.count, 0)
        .toFixed(2)
    )

    return {
      cartList,
      addToCart,
      totalCount,
      totalPrice,
      delCart,
      singleCheck,
      allCheck,
      allSelected,
      selectedCount,
      selectedPrice,
      updateCartList,
      clearCartList
    }
  },
  {
    persist: true
  }
)
