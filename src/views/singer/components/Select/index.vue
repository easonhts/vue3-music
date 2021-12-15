<template>
  <div class="container">
    <div class="operation">
      <div class="close" @click="handleClose">关闭</div>
      <div class="save" @click="handleSave">保存</div>
    </div>

    <div class="select-tag">
      <div class="tip-text">已选：</div>
      <div v-for="(item, key) in selectTags" :key="key">
        <Tag v-if="item" @onDelete="handleDelete(key)" :clear="clear">
          {{ item.label }}
        </Tag>
      </div>
    </div>

    <div class="classify">
      <div class="classify-key">语种：</div>
      <div class="classify-value">
        <Tag v-for="item in SINGER_AREA" @click="handleSelect('area', item)" :type="'gray'" :key="item.value">
          {{ item.label }}
        </Tag>
      </div>
    </div>

    <div class="classify">
      <div class="classify-key">分类：</div>
      <div class="classify-value">
        <Tag v-for="item in SINGER_TYPE" @click="handleSelect('type', item)" :type="'gray'" :key="item.value">
          {{ item.label }}
        </Tag>
      </div>
    </div>

    <div class="classify">
      <div class="classify-key">字母：</div>
      <div class="classify-value">
        <Tag
          class="alpha"
          v-for="item in ALPHA_TYPE"
          @click="handleSelect('alpha', item)"
          :type="'gray'"
          :key="item.value"
        >
          {{ item.label }}
        </Tag>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SINGER_TYPE, SINGER_AREA, ALPHA_TYPE } from '@/lib/constant'

import Tag from '../Tag/index.vue'

type SelectTags = Record<string, { label: string; value: string } | undefined>

export default defineComponent({
  components: { Tag },
  data() {
    return {
      ALPHA_TYPE,
      SINGER_TYPE,
      SINGER_AREA,
      selectTags: {
        area: undefined,
        type: undefined,
        alpha: undefined
      } as SelectTags
    }
  },
  emits: ['save', 'close'],
  computed: {
    clear() {
      return Object.values(this.selectTags).filter(Boolean).length > 1
    }
  },
  methods: {
    handleSelect(key: string, value: { label: string; value: string }) {
      this.selectTags[key] = value
    },
    handleDelete(key: string) {
      this.selectTags[key] = undefined
    },
    handleSave() {
      this.$emit('save', JSON.parse(JSON.stringify(this.selectTags)))
      this.$emit('close')
    },
    handleClose() {
      this.$emit('close')
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  background: @color-background;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 30px;

  .tip-text {
    font-size: @font-size-medium;
    color: @color-theme;
    margin-right: 10px;
  }

  .operation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    color: @color-theme;
    font-size: @font-size-small;
  }
  .select-tag {
    display: flex;
    justify-content: start;
    height: 88px;
    align-items: center;
  }

  .classify {
    display: flex;
    margin-bottom: 30px;
    .classify-key {
      font-size: @font-size-medium;
      color: @color-theme;
      white-space: nowrap;
      margin-right: 10px;
    }
    .classify-value {
      display: flex;
      flex-wrap: wrap;
      .alpha {
        text-align: center;
        min-width: 45px;
        margin-right: 18px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>