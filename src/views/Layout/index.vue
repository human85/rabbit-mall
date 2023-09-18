<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import { useCategoryStore } from '@/stores/categoryStore.js'

// 触发 action 获取一级分类列表
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategoryList())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <router-view></router-view>
  <LayoutFooter />
</template>
