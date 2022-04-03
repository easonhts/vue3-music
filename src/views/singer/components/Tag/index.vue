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
  position: relative;
  display: inline-block;
  padding: 6px 16px;
  margin-right: 10px;
  font-size: @font-size-small;
  cursor: pointer;
  border-radius: 18px;

  .delete {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}

.red {
  color: @color-theme;
  background: @color-background-sub;
}

.gray {
  color: @color-text-l;
  background: @color-background-d;

  &:hover {
    color: @color-theme;
  }
}
</style>