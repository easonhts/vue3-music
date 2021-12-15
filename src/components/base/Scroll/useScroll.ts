import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import type { Ref } from 'vue'
import BScroll from '@better-scroll/core'
import type { Options } from '@better-scroll/core'

import ObserveDOM from '@better-scroll/observe-dom'

// 监听content 以及 content 子元素 DOM 改变 重新refresh
BScroll.use(ObserveDOM)

type EmitType = 'scroll'

type EmitEvent = (type: EmitType, value: any) => void

const useScroll = (wrapperRef: Ref, options: Options, emit: EmitEvent) => {
  const scroll = ref<BScroll>()
  onMounted(() => {
    const scrollVal: BScroll = scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })

    if (options.probeType) {
      scrollVal.on('scroll', (pos: any) => {
        emit('scroll', pos)
      })
    }
  })

  onActivated(() => {
    scroll.value?.enable()
    scroll.value?.refresh
  })

  onDeactivated(() => {
    scroll.value?.disable()
  })

  onUnmounted(() => {
    scroll.value?.destroy()
  })
}

export default useScroll
