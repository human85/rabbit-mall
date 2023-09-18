<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/categoryStore.js'

const categoryStore = useCategoryStore()
const { y } = useWindowScroll()
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <!-- logo 区域 -->
      <router-link class="logo" to="/"></router-link>
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <li><router-link to="/" class="home">首页</router-link></li>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <router-link active-class="active" :to="{ name: 'category', params: { id: item.id } }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 过渡
  transition: all 0.3s linear;
  // 状态一
  transform: translateY(-100%);
  opacity: 0;
  // 状态二
  &.show {
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url('@/assets/images/logo.png') no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>
