<template>
  <div class="singer-detail">
    <MusicList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MusicList } from '@/components/index'

export default defineComponent({
  components: { MusicList },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.singer-detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: @color-background;
}
</style>
