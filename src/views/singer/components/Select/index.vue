<script setup lang="ts">
import { reactive } from 'vue'
import { SINGER_TYPE, SINGER_AREA, ALPHA_TYPE } from '@/lib/constant'

import Tag from '../Tag/index.vue'

type SelectTags = Record<string, { label: string; value: string }>

const emit = defineEmits<{
  (e: 'save', val: SelectTags): void
  (e: 'close'): void
}>()

const selectTags = reactive<Partial<SelectTags>>({
  area: undefined,
  type: undefined,
  alpha: undefined
})

const handleSelect = (key: string, value: { label: string; value: string }) => {
  selectTags[key] = value
}
const handleDelete = (key: string) => {
  selectTags[key] = undefined
}

const handleSave = () => {
  emit('save', JSON.parse(JSON.stringify(selectTags)))
  emit('close')
}
</script>
<template>
  <div class="container">
    <div class="operation">
      <div class="close" @click="emit('close')"><i class="icon-back"></i></div>
      <div class="save" @click="handleSave">保存</div>
    </div>

    <div class="select-tag">
      <div class="tip-text">已选：</div>
      <div v-for="(item, key) in selectTags" :key="key">
        <Tag v-if="item" clear @delete="handleDelete(key)">
          {{ item.label }}
        </Tag>
      </div>
    </div>

    <div class="classify">
      <div class="classify-key">语种：</div>
      <div class="classify-value">
        <Tag v-for="item in SINGER_AREA" :key="item.value" type="gray" @click="handleSelect('area', item)">
          {{ item.label }}
        </Tag>
      </div>
    </div>

    <div class="classify">
      <div class="classify-key">分类：</div>
      <div class="classify-value">
        <Tag v-for="item in SINGER_TYPE" :key="item.value" type="gray" @click="handleSelect('type', item)">
          {{ item.label }}
        </Tag>
      </div>
    </div>

    <div class="classify">
      <div class="classify-key">字母：</div>
      <div class="classify-value">
        <Tag
          v-for="item in ALPHA_TYPE"
          :key="item.value"
          class="alpha"
          type="gray"
          @click="handleSelect('alpha', item)"
        >
          {{ item.label }}
        </Tag>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 30px;
  background: @color-background;
  transform-origin: right bottom;

  .tip-text {
    margin-right: 10px;
    font-size: @font-size-medium;
    color: @color-theme;
  }

  .operation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    font-size: @font-size-small;
    color: @color-theme;
  }

  .select-tag {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 88px;
  }

  .classify {
    display: flex;
    margin-bottom: 30px;

    .classify-key {
      margin-right: 10px;
      font-size: @font-size-medium;
      color: @color-theme;
      white-space: nowrap;
    }

    .classify-value {
      display: flex;
      flex-wrap: wrap;

      .alpha {
        min-width: 45px;
        margin-right: 18px;
        margin-bottom: 12px;
        text-align: center;
      }
    }
  }
}
</style>
