<template>
  <span class="tag" :class="{ red: type === 'red', gray: type === 'gray' }">
    <slot></slot>
    <span v-if="clear" class="delete" @click="handleDelete">x</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'tag',
  props: {
    clear: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<'gray' | 'red'>,
      default: 'red'
    }
  },
  emit: ['onDelete'],
  methods: {
    handleDelete() {
      this.$emit('onDelete')
    }
  }
})
</script>

<style lang="less" scoped>
.tag {
  cursor: pointer;
  display: inline-block;
  font-size: @font-size-small;
  padding: 6px 16px;
  border-radius: 18px;
  margin-right: 10px;
  position: relative;
  .delete {
    position: absolute;
    top: -10px;
    right: -10px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
  }
}

.red {
  background: @color-background-sub;
  color: @color-theme;
}

.gray {
  background: @color-background-d;
  color: @color-text-l;
  &:hover {
    color: @color-theme;
  }
}
</style>