<script setup lang="ts">
const props = defineProps<{ src: string }>()
</script>

<template>
  <img v-lazy="props.src" />
</template>
