import { getTopCategory } from '@/apis/category.js'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()

  async function getCategoryData() {
    const { data } = await getTopCategory(route.params.id)
    categoryData.value = data.result
  }
  onMounted(() => getCategoryData())
  // 解决路由缓存问题
  onBeforeRouteUpdate(to => getCategoryData(to.params.id))
  return { categoryData }
}
