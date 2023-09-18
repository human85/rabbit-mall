import { getBannerAPI } from '@/apis/home.js'

export function useBanner() {
  const bannerList = ref([])
  async function getBannerList() {
    const { data } = await getBannerAPI(2)
    bannerList.value = data.result
  }

  onMounted(() => getBannerList())
  return { bannerList }
}
