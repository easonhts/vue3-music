<template>
  <div class="recommend">
    <!-- Scroll 滚动的是 Scroll firstChild -->
    <Scroll class="recommend-content">
      <div>
        <Slider v-if="banners.length" :data="banners" />
        <div class="recommend-list">
          <div class="title">推荐歌单</div>
          <div class="list">
            <figure v-for="item in recommendList" :key="item.id" class="item">
              <img class="img" :src="item.picUrl" />
              <div class="play-count">{{ item.playCount }}万</div>
              <figcaption class="desc">
                {{ item.name }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Slider, Scroll } from '@/components/index'
import { getBanner, getRecommendList } from '@/service/recommendService'
import { computedPlayCount } from '@/lib/utils'

export default defineComponent({
  components: { Slider, Scroll },
  data() {
    return {
      banners: [] as Music.Api.Banner.Get.res,
      recommendList: [] as Music.Api.Personalized.Get.Res
    }
  },
  async created() {
    const { banners } = await getBanner()
    this.banners = banners

    const { result } = await getRecommendList()
    this.recommendList = result.map((item) => ({
      ...item,
      playCount: computedPlayCount(item.playCount)
    }))
  }
})
</script>

<style lang="less" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 176px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
  }
  .title {
    height: 88px;
    line-height: 88px;
    text-align: center;
    color: @color-theme;
    font-size: @font-size-small;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    color: @color-text-ll;
    .item {
      position: relative;
      width: 230px;
      margin-bottom: 24px;
      // overflow: hidden;
      &:nth-of-type(3n -1) {
        margin: 0px 15px 15px 15px;
      }
      .img {
        display: block;
        width: 100%;
        height: 230px;
        border-radius: 10px;
        opacity: 0.6;
      }
      .desc {
        .mutli-line-no-wrap(2);
        font-size: @font-size-small;
        padding-top: 20px;
      }

      .play-count {
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: @font-size-small;
        padding: 2px 8px;
        border-radius: 16px;
        background: @color-text-d;
      }
    }
  }
}
</style>