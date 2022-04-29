<script setup lang="ts">
const props = defineProps<{ data: Music.Api.Singer.HotList.Get.Res }>()

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()
</script>

<template>
  <ul class="container">
    <li v-for="item in props.data" :key="item.id" class="singer-info" @click="emit('click', item.id)">
      <LazyImg class="photo" :src="item.img1v1Url" />
      <div class="name">{{ item.name }}</div>
    </li>
  </ul>
</template>

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
