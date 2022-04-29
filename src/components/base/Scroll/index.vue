<script setup lang="ts">
import { ref, toRefs, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom' // 监听content 以及 content 子元素 DOM 改变 重新refresh

import type { Options } from '@better-scroll/core'

BScroll.use(ObserveDOM)

const props = withDefaults(defineProps<{ option?: Options }>(), {
  option: () => ({
    click: true,
    probeType: 0
  })
})

const { option } = toRefs(props)

const wrapperRef = ref<HTMLElement>()
const scroll = ref<BScroll>()

onMounted(() => {
  if (wrapperRef.value) {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...option.value
    })
  }
})

onActivated(() => {
  scroll.value?.enable()
  scroll.value?.refresh()
})

onDeactivated(() => {
  scroll.value?.disable()
})

onUnmounted(() => {
  scroll.value?.destroy()
})
</script>
<template>
  <div ref="wrapperRef">
    <!-- Scroll 滚动的是 Scroll firstChild -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>
