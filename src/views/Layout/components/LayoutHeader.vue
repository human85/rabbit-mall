<script setup>
import { useCategoryStore } from '@/stores/categoryStore.js'
import HeaderCart from './HeaderCart.vue'
// 一级导航数据
const categoryStore = useCategoryStore()
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <router-link to="/">小兔鲜儿</router-link>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <router-link to="/">首页</router-link>
        </li>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <router-link active-class="active" :to="{ name: 'category', params: { id: item.id } }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 头部购物车 -->
      <HeaderCart />
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
        text-indent: -9999px;
      }
    }

    .app-header-nav {
      display: flex;
      margin-left: 40px;

      li {
        display: inline-block;
        margin-right: 40px;

        a {
          display: inline-block;
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          text-align: center;

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

    .search {
      margin-left: auto;
      margin-right: 10px;
      width: 170px;
      height: 32px;
      line-height: 32px;
      border-bottom: 1px solid #e7e7e7;

      .icon-search {
        margin-left: 5px;
        font-size: 18px;
      }
      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }
    .cart {
      width: 50px;

      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;

        .icon-cart {
          font-size: 22px;
        }

        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
}
</style>
