<template>
  <div ref="wrapperRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, PropType, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import Pulldown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'

import type { Options } from '@better-scroll/core'

BScroll.use(ObserveDOM).use(Pulldown).use(Pullup)

interface ScrollPosition {
  x: number
  y: number
}

const scrollEmits = {
  iScroll: (pos: ScrollPosition) => typeof pos.x === 'number',
  handleAction: () => Promise
}

export default defineComponent({
  name: 'Scroll',
  props: {
    option: {
      type: Object as PropType<Options>,
      default: () => {
        return {
          click: true,
          probeType: 0
        }
      }
    },
    hasMore: {
      type: Boolean,
      default: false
    }
  },
  emits: scrollEmits,
  setup(props, { emit }) {
    const wrapperRef = ref<HTMLElement>()
    const scroll = ref<BScroll>()

    // const isPullUp = ref(false)

    // const { option, hasMore } = toRefs(props)
    const { option } = toRefs(props)

    onMounted(() => {
      if (wrapperRef.value) {
        scroll.value = new BScroll(wrapperRef.value, {
          observeDOM: true,
          ...option.value
        })
      }

      if (option.value.probeType) {
        scroll.value?.on('scroll', (pos: ScrollPosition) => {
          emit('iScroll', pos)
        })
      }

      // if (option.value.pullUpLoad) {
      //   scroll.value?.on('pullingUp', async () => {
      //     if (hasMore.value && !isPullUp.value) {
      //       isPullUp.value = true
      //       // 这里不可以 vue底层事件默认 应该是不行的
      //       await emit('handleAction')
      //       scroll.value?.finishPullUp()
      //       scroll.value?.refresh()
      //       isPullUp.value = false
      //     }
      //   })
      // }
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

    return { wrapperRef, scroll }
  }
})
</script>
