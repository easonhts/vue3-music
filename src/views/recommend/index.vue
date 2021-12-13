<template>
  <div class="recommend">
    <Slider v-if="banners.length" :data="banners" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Slider } from '@/components/index'
import { getBanner } from '@/service/recommendService'

export default defineComponent({
  components: { Slider },
  data() {
    return {
      banners: [] as Music.Api.Banner.Get.res
    }
  },
  async created() {
    const { banners } = await getBanner()
    this.banners = banners
  }
})
</script>

<style scoped>
</style>