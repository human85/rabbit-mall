<script setup>
import HomePanel from './HomePanel.vue'
import { getNewAPI } from '@/apis/home.js'

const newList = ref([])

async function getNewList() {
  const { data } = await getNewAPI()
  newList.value = data.result
}

onMounted(() => getNewList())
</script>

<template>
  <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
          <router-link :to="{ name: 'detail', params: { id: item.id } }">
            <img v-img-lazy="item.picture" />
            <p class="name">{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
          </router-link>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgba(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
