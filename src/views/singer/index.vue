<template>
  <div class="singer">
    <div class="tab-bar">
      <div class="tag-list">
        <Tag v-for="item in tags" :key="item?.value">{{ item?.label }}</Tag>
      </div>
      <div @click="toogle" class="more">选择</div>
    </div>
    <List :data="singerList" />
  </div>
  <Select v-show="bol" @close="toogle" @save="handleSave" />
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, reactive } from 'vue'
import { HOT, HOT_SINGER_MAP } from '@/lib/constant'
import { useBoolean } from '@/hooks/index'
import { getHotSingerList, getSingerList } from '@/service/singer'

import Tag from './components/Tag/index.vue'
import Select from './components/Select/index.vue'
import List from './components/List/index.vue'

type SelectTags = Record<string, { label: string; value: string }>

export default defineComponent({
  components: { Tag, Select, List },
  setup() {
    const { bol, toogle } = useBoolean(false)
    const selectTag = ref<SelectTags>({
      [HOT]: HOT_SINGER_MAP
    })
    const params = reactive({ limit: 30, page: 0 })

    const singerList = ref<Music.Api.Singer.HotList.Get.Res>()

    const tags = computed(() => {
      return Object.values(selectTag.value).filter((item) => item.value !== '-1')
    })

    onMounted(async () => {
      const { artists } = await getHotSingerList({ limit: params.limit })
      singerList.value = artists
    })

    const handleSave = (val: SelectTags) => {
      selectTag.value = val

      fetchSingerList()
    }

    const fetchSingerList = async () => {
      const params = formatParams()

      const { artists } = await getSingerList(params)

      singerList.value = artists
    }

    const formatParams = () => {
      const { area, type, alpha } = selectTag.value || {}
      return {
        area: area.value,
        type: type.value,
        initial: alpha.value,
        limit: params.limit,
        offset: params.limit * params.page
      }
    }

    return { bol, toogle, handleSave, tags, singerList }
  }
})
</script>

<style lang="less" scoped>
.singer {
  .tab-bar {
    display: flex;
    justify-content: space-between;
    height: 88px;
    align-items: center;
    padding: 0 60px 0 60px;
    background: #333;
    .tag-list {
      display: flex;
      align-items: center;
      justify-content: start;
    }
    .more {
      color: @color-theme;
      font-size: @font-size-medium;
    }
  }
}
</style>