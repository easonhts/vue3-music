<template>
  <div class="slider" ref="wrapperRef">
    <div class="slider-group">
      <div class="slider-page" v-for="item in data" :key="item.imageUrl">
        <img :src="item.imageUrl" />
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in data"
        :key="item.imageUrl"
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
  min-height: 1px;
  font-size: 0;
  touch-action: pan-y;
  position: relative;
  overflow: hidden;
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
    left: 50%;
    bottom: 24px;
    line-height: 24px;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 8px;
      width: 16px;
      height: 16px;
      transform: translateZ(1px);
      border-radius: 50%;
      background: @color-text-l;
      &.active {
        width: 40px;
        border-radius: 10px;
        background: @color-text-ll;
      }
    }
  }
}
</style>