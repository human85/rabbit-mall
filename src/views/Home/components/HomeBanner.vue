<script setup>
import { getBannerAPI } from '@/apis/home.js'

const bannerList = ref([])

async function getBannerList() {
  const { data } = await getBannerAPI()
  bannerList.value = data.result
}

onMounted(() => getBannerList())
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  width: 1240px;
  height: 500px;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
