import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import type { Ref } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

BScroll.use(Slide)

/**
 * @param wrapperRef HTMLElement
 * @returns currentIndex
 */
const useSlider = (wrapperRef: Ref) => {
  const currentIndex = ref<number>(0)
  const slider = ref<BScroll>()

  onMounted(() => {
    const sliderVal = (slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 3,
      slide: true
    }))

    sliderVal.on('slidePageChanged', ({ pageX }: { pageX: number }) => {
      currentIndex.value = pageX
    })
  })

  onActivated(() => {
    slider.value?.refresh()
    slider.value?.enable()
  })

  onDeactivated(() => {
    slider.value?.disable()
  })

  onUnmounted(() => {
    slider.value?.destroy()
  })

  return { currentIndex }
}

export default useSlider
