import { getCategoryAPI } from '@/apis/layout.js'

export const useCategoryStore = defineStore('category', () => {
  // state
  const categoryList = ref([])
  // action
  async function getCategoryList() {
    const { data } = await getCategoryAPI()
    categoryList.value = data.result
  }

  return { categoryList, getCategoryList }
})
