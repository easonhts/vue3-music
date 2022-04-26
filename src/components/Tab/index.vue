<template>
  <div class="tabs">
    <router-link v-for="item in TABS" :key="item.path" class="tab-item" :to="item.path">
      <span class="tab-link">
        {{ item.name }}
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TABS } from './constant'

export default defineComponent({
  setup() {
    return {
      TABS
    }
  }
})
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  align-items: center;
  height: 88px;
  font-size: @font-size-medium;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      color: @color-text-l;
    }

    &.router-link-active {
      .tab-link {
        color: @color-theme;
        border-bottom: 2px solid @color-sub-theme;
      }
    }
  }
}
</style>
