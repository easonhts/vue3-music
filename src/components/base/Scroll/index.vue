<template>
  <div ref="wrapperRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import useScroll from './useScroll'
import type { Options } from '@better-scroll/core'

export default defineComponent({
  name: 'scroll',
  props: {
    option: {
      type: Object as PropType<Options>,
      default:() => {
        return {
          click: true,
          probeType: 0,
        }
      }
    }
  },
  emit: ['scroll'],
  setup(props, { emit}) {
    const wrapperRef = ref<HTMLElement>()

    useScroll(wrapperRef, props, emit)

    return { wrapperRef }
  }
})
</script>

<style scoped>
</style>