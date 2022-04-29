<script setup>
import { Header, Tab } from './components'
</script>

<template>
  <Header></Header>
  <Tab></Tab>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>
