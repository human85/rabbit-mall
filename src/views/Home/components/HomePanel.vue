<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <h3>
        {{ title }}<small>{{ subtitle }}</small>
      </h3>
      <div>
        <slot name="main" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;
  h3 {
    margin-left: 6px;
    padding: 40px 0;
    font-size: 32px;
    line-height: 1;
    font-weight: normal;
    small {
      margin-left: 20px;
      font-size: 16px;
      color: #999;
    }
  }
}
</style>
