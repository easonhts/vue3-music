<template>
  <Header />
  <Tab />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { Header, Tab } from './components'
export default defineComponent({
  components: { Header, Tab }
})
</script>
