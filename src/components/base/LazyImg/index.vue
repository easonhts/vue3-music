<template>
  <img v-lazy="src">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'lazyImg',
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
</script>