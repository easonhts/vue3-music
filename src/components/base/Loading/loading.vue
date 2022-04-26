<template>
  <div class="loading">
    <img src="./loading.gif" alt="" />
    <div class="tip-text">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  data() {
    return {
      message: '正在载入。。。'
    }
  },
  methods: {
    setTitle(val: string) {
      this.message = val
    }
  }
})
</script>
