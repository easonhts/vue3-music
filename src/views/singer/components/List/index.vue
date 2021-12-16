<template>
  <ul class="container">
    <li v-for="item in data" @click="handleClick(item.id)" :key="item.id" class="singer-info">
      <LazyImg class="photo" :src="item.img1v1Url" />
      <div class="name">{{ item.name }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'list',
  props: {
    data: {
      type: Array as PropType<Music.Api.Singer.HotList.Get.Res>
    }
  },
  emits: {
    click: (id : number) => typeof id === 'number'
  },
  methods: {
    handleClick(id: number) {
      this.$emit('click', id)
    }
  }
})
</script>

<style lang="less" scoped>
.container {
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