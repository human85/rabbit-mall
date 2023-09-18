<script setup>
import powerSet from './power-set'

const props = defineProps({
  goods: {
    type: Object,
    default: () => ({ spec: [], skus: [] })
  }
})

const emit = defineEmits(['sku-change'])

//const goods = ref({}) // 商品数据
let pathMap = {}

function init() {
  // 获取商品数据时生成有效的路径字典
  pathMap = getPathMap(props.goods)
  // 初始化规格禁用
  initDisabledStatus(props.goods)
}

onMounted(() => init())

// 点击切换选中状态
function changeStatus(value, values) {
  if (value.disabled) return
  if (value.selected) {
    value.selected = false
  } else {
    values.forEach(value => (value.selected = false))
    value.selected = true
  }
  // 更新禁用状态
  updateDisabledStatus(props.goods.specs)
  // 产出有效的 sku 数据对象
  const selectedValues = getSelectedValues(props.goods.specs)
  const isReady = !selectedValues.includes(undefined)
  if (isReady) {
    const key = selectedValues.filter(item => item).join('-')
    const sku = props.goods.skus.find(sku => sku.id === pathMap[key].toString())
    emit('sku-change', {
      skuId: sku.id,
      inventory: sku.inventory,
      oldPrice: sku.oldPrice,
      price: sku.price,
      specsText: sku.specs.reduce((p, c) => p + ' ' + c.name + ': ' + c.valueName, '')
    })
  } else {
    emit('sku-change', {})
  }
}

// 初始化禁用状态
function initDisabledStatus(goods) {
  goods.specs.forEach(spec => {
    spec.values.forEach(value => (value.disabled = !pathMap[value.name]))
  })
}

// 更新禁用状态
function updateDisabledStatus(specs) {
  const selectedValues = getSelectedValues(specs)
  specs.forEach((spec, index) => {
    const matchValues = [...selectedValues]
    spec.values.forEach(value => {
      if (value.selected) return
      matchValues[index] = value.name
      const key = matchValues.filter(item => item).join('-')
      // value.disabled = !pathMap[key]
      if (pathMap[key]) {
        value.disabled = false
      } else {
        value.disabled = true
      }
    })
  })
}

// 获取已选中的规格名称数组 ['黑色',undefined,undefined]
function getSelectedValues(specs) {
  const arr = []
  specs.forEach(spec => {
    const selectedVal = spec.values.find(value => value.selected)
    arr.push(selectedVal ? selectedVal.name : undefined)
  })
  return arr
}

// 生成有效路径字典
function getPathMap(goods) {
  const pathMap = {}
  // 库存大于 0 的 sku 数组
  const effectiveSkus = goods.skus.filter(sku => sku.inventory > 0)
  effectiveSkus.forEach(sku => {
    // 获取可选 sku 规格值数组的子集数组
    const valueNameArr = sku.specs.map(spec => spec.valueName)
    const powerSetArr = powerSet(valueNameArr)
    // 遍历子集 往 pathMap 中插入数据
    powerSetArr.forEach(arr => {
      const key = arr.join('-')
      if (pathMap[key]) {
        pathMap[key].push(sku.id)
      } else {
        pathMap[key] = [sku.id]
      }
    })
  })
  return pathMap
}
</script>

<template>
  <div class="goods-sku">
    <dl v-for="spec in goods.specs" :key="spec.id">
      <dt>{{ spec.name }}</dt>
      <dd>
        <template v-for="value in spec.values" :key="value.name">
          <img
            @click="changeStatus(value, spec.values)"
            :class="{ selected: value.selected, disabled: value.disabled }"
            v-if="value.picture"
            :src="value.picture"
            :alt="value.name"
          />
          <span
            @click="changeStatus(value, spec.values)"
            :class="{ selected: value.selected, disabled: value.disabled }"
            v-else
          >
            {{ value.name }}
          </span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  cursor: pointer;

  &.selected {
    border-color: #27ba9b;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    dt {
      // flex-shrink: 0;
      min-width: 45px;
      color: #999;
    }

    dd {
      display: flex;
      flex-wrap: wrap;

      > img {
        margin-right: 15px;
        width: 50px;
        height: 50px;
        @include sku-state-mixin;
      }

      > span {
        margin: 5px 15px 5px 0;
        padding: 0 20px;
        height: 30px;
        line-height: 30px;
        color: #666;
        @include sku-state-mixin;
      }
    }
  }
}
</style>
