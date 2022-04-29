<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ALPHA_TYPE } from '@/lib/constant'
import { useBoolean } from '@/hooks/index'
import { getSingerList } from '@/service/singer'
import { Scroll } from '@/components/index'

import Tag from './components/Tag/index.vue'
import Select from './components/Select/index.vue'
import List from './components/List/index.vue'

type SelectTags = Record<string, { label: string; value: string }>

const { bol, toogle } = useBoolean(false)
const selectTag = ref<Partial<SelectTags>>({
  alpha: ALPHA_TYPE[0]
})
const params = reactive({ limit: 30, page: 0 })
const singerList = ref<Music.Api.Singer.HotList.Get.Res>([])

const router = useRouter()

const tags = computed(() => {
  return Object.values(selectTag.value)
})

onMounted(async () => {
  fetchSingerList()
})

const handleSave = (val: Partial<SelectTags>) => {
  selectTag.value = val

  fetchSingerList()
}

const fetchSingerList = async () => {
  const params = petAdapter()

  const { artists } = await getSingerList(params)

  singerList.value = artists
}

const petAdapter = () => {
  const { area, type, alpha } = selectTag.value
  return {
    area: area?.value,
    type: type?.value,
    initial: alpha?.value,
    limit: params.limit,
    offset: params.limit * params.page
  }
}

const gotoDetail = (id: number) => {
  router.push(`/singer/detail/${id}`)
}
</script>

<template>
  <div class="singer">
    <div class="tab-bar">
      <div class="tag-list">
        <Tag v-for="item in tags" :key="item?.value">{{ item?.label }}</Tag>
      </div>
      <div class="more" @click="toogle">选择</div>
    </div>

    <Scroll class="singer-list">
      <List :data="singerList" @click="gotoDetail" />
    </Scroll>
  </div>

  <transition name="fly">
    <Select v-show="bol" @close="toogle" @save="handleSave" />
  </transition>

  <router-view v-slot="{ Component }">
    <transition name="fly">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="less" scoped>
.singer {
  .tab-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    padding: 0 60px 0 60px;
    background: #333;

    .tag-list {
      display: flex;
      align-items: center;
      justify-content: start;
    }

    .more {
      font-size: @font-size-medium;
      color: @color-theme;
    }
  }

  .singer-list {
    position: fixed;
    top: 264px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
}
</style>
