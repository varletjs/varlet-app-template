<script setup lang="ts">
import type { IndexBar } from '@varlet/ui'
import { ref, onMounted } from 'vue'

const keyword = ref('')
const list = ref<string[]>([])
const active = ref('A')
const isRefresh = ref(false)
const indexBar = ref<IndexBar>()

function refresh() {
  setTimeout(() => {
    isRefresh.value = false
  }, 2000)
}

function handleTabsChange(active: string | number) {
  indexBar.value!.scrollTo(active, { event: false })
}

function handleIndexBarChange(index: string | number) {
  active.value = index as string
}

onMounted(() => {
  for (let i = 0; i < 26; i++) {
    list.value.push(String.fromCharCode(65 + i))
  }
})
</script>

<template>
  <app-header>
    <template #right>
      <var-input
        class="search-input"
        placeholder="Search something..."
        :hint="false"
        v-model="keyword"
        size="small"
        clearable
      />
    </template>
  </app-header>

  <var-pull-refresh v-model="isRefresh" @refresh="refresh">
    <div class="search">
      <div class="search-container">
        <var-tabs
          class="search-tabs"
          layout-direction="vertical"
          indicator-position="reverse"
          v-model:active="active"
          @change="handleTabsChange"
        >
          <var-tab class="search-tab" v-for="item in list" :key="item" :name="item">{{ item }}</var-tab>
        </var-tabs>

        <div class="search-index-bar-container">
          <var-index-bar duration="300" hide-list ref="indexBar" @change="handleIndexBarChange">
            <div v-for="item in list" :key="item">
              <var-index-anchor :index="item" class="search-index-bar-anchor"> Title {{ item }} </var-index-anchor>

              <var-cell>{{ item }} Text</var-cell>
              <var-cell>{{ item }} Text</var-cell>
              <var-cell>{{ item }} Text</var-cell>
            </div>
          </var-index-bar>
        </div>
      </div>
    </div>
  </var-pull-refresh>
</template>

<style scoped lang="less">
.search {
  &-input {
    width: 314px;
  }

  &-container {
    display: flex;
    height: calc(100vh - 134px);
  }

  &-tabs {
    width: 64px;
    height: 100%;
  }

  &-tab {
    height: 40px;
  }

  &-index-bar-container {
    flex: 1;
    overflow: auto;
    margin-left: 10px;
  }

  :deep(&-index-bar-anchor) {
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 14px;
    transition: all 0.25s;
    background: var(--bottom-navigation-background-color);
    color: var(--color-primary);
  }
}
</style>
