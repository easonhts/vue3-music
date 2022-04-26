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
import { defineComponent } from 'vue'
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
      display: block;
      padding: 20px;
      color: @color-theme;
    }
  }

  .title {
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 20;
    width: 80%;
    font-size: @font-size-large;
    line-height: 72px;
    color: @color-theme;
    text-align: center;
  }
}
</style>
