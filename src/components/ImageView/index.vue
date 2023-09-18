<script setup>
import { useMouseInElement } from '@vueuse/core'
// 图片列表
defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)

// 小图点击事件回调
function changeImage(i) {
  currentIndex.value = i
}

// 蒙层小滑块及放大镜效果实现
const target = ref(null)

const { elementX, elementY, isOutside } = useMouseInElement(target)
// 小滑块位置
const top = ref(0)
const left = ref(0)
// 放大镜大图背景位置
const X = ref(0)
const Y = ref(0)

watch([elementX, elementY], () => {
  // 鼠标不在图片内部时返回
  if (isOutside.value) return
  // 横向
  if (elementX.value >= 100 && elementX.value <= 300) left.value = elementX.value - 100
  // 竖向
  if (elementY.value >= 100 && elementY.value <= 300) top.value = elementY.value - 100

  // 处理边界行为
  if (elementX.value <= 100) left.value = 0
  if (elementX.value >= 300) left.value = 200
  if (elementY.value <= 100) top.value = 0
  if (elementY.value >= 300) top.value = 200

  // 放大镜背景位置
  X.value = -left.value * 2
  Y.value = -top.value * 2
})
</script>

<template>
  <div class="goods-image">
    <!-- 左侧大图 -->
    <div class="middle">
      <img :src="imageList[currentIndex]" ref="target" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ top: top + 'px', left: left + 'px' }" v-show="!isOutside"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="img" @click="changeImage(i)" :class="{ active: currentIndex === 1 }">
        <img :src="img" />
      </li>
    </ul>
    <!-- 放大镜效果图 -->
    <div
      class="large"
      :style="{ backgroundImage: `url(${imageList[currentIndex]})`, backgroundPosition: X + 'px' + ' ' + Y + 'px' }"
      v-show="!isOutside"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  position: relative;
  display: flex;
  width: 480px;
  height: 400px;

  .middle {
    position: relative;

    img {
      width: 400px;
      height: 400px;
    }

    .layer {
      position: absolute;
      // top: 0;
      // left: 0;
      width: 200px;
      height: 200px;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .small {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 12px;

    li {
      width: 68px;
      height: 68px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-size: 200%;
    background-color: #f8f8f8;
  }
}
</style>
