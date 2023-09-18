<script setup>
import { useCategoryStore } from '@/stores/categoryStore.js'

// 一级分类数据
const { categoryList } = storeToRefs(useCategoryStore())
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryList" :key="item.id">
        <router-link to="/">{{ item.name }}</router-link>
        <router-link v-for="i in item.children.slice(0, 2)" :key="i.id" to="/">{{ i.name }}</router-link>
        <!-- 弹层 layer 位置 -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="good in item.goods" :key="good.id">
              <router-link to="/">
                <img :src="good.picture" />
                <div class="info">
                  <p class="name ellipsis-2">{{ good.name }}</p>
                  <p class="desc ellipsis">{{ good.desc }}</p>
                  <p class="price"><i>&yen;</i>{{ good.price }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  position: relative;
  z-index: 99;
  width: 250px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);

  .menu {
    display: flex;
    flex-direction: column;

    > li {
      padding-left: 30px;
      // height: (500px / 9);
      height: calc(500px / 9);
      line-height: calc(500px / 9);

      &:hover {
        background-color: $xtxColor;

        // hover 状态下 layer 盒子显示
        .layer {
          display: block;
        }
      }

      > a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        display: none;
        position: absolute;
        left: 250px;
        top: 0;
        padding: 0 15px;
        width: 990px;
        height: 500px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: grid;
          grid-template: repeat(3, 1fr) / repeat(3, 1fr);
          gap: 15px;

          li {
            width: 310px;
            height: 120px;
            background: #fff;
            a {
              display: flex;
              align-items: center;
              padding: 10px;
              width: 100%;
              height: 100%;

              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 10px;
                height: 95px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
