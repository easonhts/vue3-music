<template>
  <div class="singer-list">
    <Scroll class="singer-content">
      <ul>
        <li v-for="item in data" :key="item.id" class="singer-info">
          <img class="photo" :src="item.img1v1Url" />
          <div class="name">{{ item.name }}</div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Scroll } from '@/components/index'

export default defineComponent({
  components: { Scroll },
  name: 'list',
  props: {
    data: {
      type: Array as PropType<Music.Api.Singer.HotList.Get.Res>
    }
  }
})
</script>

<style lang="less" scoped>
.singer-list {
  position: fixed;
  width: 100%;
  top: 264px;
  bottom: 0;
  .singer-content {
    height: 100%;
    overflow: hidden;
  }
  .singer-info {
    display: flex;
    align-items: center;
    padding: 40px 0 40px 60px;
    .photo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .name {
      margin-left: 40px;
      font-size: @font-size-medium;
      color: @color-text-l;
    }
  }
}
</style>