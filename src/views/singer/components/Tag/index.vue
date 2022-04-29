<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(defineProps<{ clear?: boolean; type?: 'gray' | 'red' }>(), {
  type: 'red'
})

const emit = defineEmits<{
  (e: 'delete'): void
}>()

const { type, clear } = toRefs(props)
</script>
<template>
  <span class="tag" :class="{ red: type === 'red', gray: type === 'gray' }">
    <slot></slot>
    <span v-if="clear" class="delete" @click="emit('delete')">x</span>
  </span>
</template>

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
