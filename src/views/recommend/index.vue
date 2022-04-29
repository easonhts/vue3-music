<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { Slider, Scroll } from '@/components/index'
import { getBanner, getRecommendList } from '@/service/recommendService'
import { computedPlayCount } from '@/lib/utils'

const banners = reactive<Music.Api.Banner.Get.res>([])
const recommendList = reactive<Music.Api.Personalized.Get.Res>([])

onMounted(() => {
  getBannersOrRecommendList()
})

const getBannersOrRecommendList = async () => {
  const { banners: bannerList } = await getBanner()

  const { result } = await getRecommendList()

  banners.push(...bannerList)

  const list = result.map((item) => ({
    ...item,
    playCount: computedPlayCount(item.playCount)
  }))

  recommendList.push(...list)
}
</script>

<template>
  <div class="recommend">
    <Scroll class="recommend-content">
      <Slider v-if="banners.length" :data="banners" />
      <div class="recommend-list">
        <div class="title">推荐歌单</div>
        <div class="list">
          <figure v-for="item in recommendList" :key="item.id" class="item">
            <LazyImg class="img" :src="item.picUrl" />
            <div class="play-count">{{ item.playCount }}万</div>
            <figcaption class="desc">
              {{ item.name }}
            </figcaption>
          </figure>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<style lang="less" scoped>
.recommend {
  position: fixed;
  top: 176px;
  bottom: 0;
  width: 100%;
  overflow: scroll;

  .recommend-content {
    height: 100%;
    overflow: hidden;
  }

  .title {
    height: 88px;
    font-size: @font-size-small;
    line-height: 88px;
    color: @color-theme;
    text-align: center;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    color: @color-theme-d;

    .item {
      position: relative;
      width: 230px;
      margin-bottom: 24px;

      // overflow: hidden;
      &:nth-of-type(3n -1) {
        margin: 0 15px 15px 15px;
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

        padding-top: 20px;
        font-size: @font-size-small;
      }

      .play-count {
        position: absolute;
        top: 6px;
        right: 10px;
        padding: 2px 8px;
        font-size: @font-size-small;
        background: @color-background-d;
        border-radius: 16px;
      }
    }
  }
}
</style>
