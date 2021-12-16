<template>
  <div class="music-list">
    <div class="back" @click="goback">
      <i class="icon-back"></i>
    </div>
    <div class="title">吴克强</div>

    <div class="bg-image"></div>

    <!-- <Scroll>1</Scroll> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { useRoute } from 'vue-router'
// import { Scroll } from '@/components/index'

export default defineComponent({
  name: 'MusicList',
  // components: { Scroll },
  // data() {
  //   return {
  //     title: '吴克强'
  //   }
  // },
  methods: {
    goback() {
      this.$router.back()
    }
  }
})
</script>

<style lang="less" scoped>
.music-list {
  position: relative;
  height: 100%;
  .back {
    position: absolute;
    top: 0;
    left: 12px;
    .icon-back {
      padding: 20px;
      display: block;
      color: @color-theme;
    }
  }

  .title {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    z-index: 20;
    text-align: center;
    line-height: 72px;
    font-size: @font-size-large;
    color: @color-theme;
  }
}
</style>