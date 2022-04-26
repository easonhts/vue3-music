<template>
  <div ref="wrapperRef" class="slider">
    <div class="slider-group">
      <div v-for="item in data" :key="item.imageUrl" class="slider-page">
        <img :src="item.imageUrl" />
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        v-for="(item, index) in data"
        :key="item.imageUrl"
        class="dot"
        :class="{ active: currentIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import useSlider from './useSlider'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<{ imageUrl: string }[]>,
      required: true
    }
  },
  setup() {
    const wrapperRef = ref<HTMLElement>()
    const { currentIndex } = useSlider(wrapperRef)

    return { currentIndex, wrapperRef }
  }
})
</script>

<style lang="less" scoped>
.slider {
  position: relative;
  min-height: 1px;
  overflow: hidden;
  font-size: 0;
  touch-action: pan-y;

  .slider-group {
    white-space: nowrap;

    .slider-page {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots-wrapper {
    position: absolute;
    bottom: 24px;
    left: 50%;
    line-height: 24px;
    transform: translateX(-50%);

    .dot {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin: 0 8px;
      background: @color-text-l;
      border-radius: 50%;
      transform: translateZ(1px);

      &.active {
        width: 40px;
        background: @color-text-ll;
        border-radius: 10px;
      }
    }
  }
}
</style>
