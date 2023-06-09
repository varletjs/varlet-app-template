<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref('/layout/home')

watch(
  () => active.value,
  (newValue) => {
    router.replace(newValue)
  }
)

watch(
  () => route.path,
  (newValue) => {
    active.value = newValue
  },
  { immediate: true }
)
</script>

<template>
  <div class="layout">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <var-bottom-navigation safe-area fixed v-model:active="active">
      <var-bottom-navigation-item label="HOME" icon="home" name="/layout/home" />
      <var-bottom-navigation-item label="SEARCH" icon="magnify" name="/layout/search" />
      <var-bottom-navigation-item label="Label" icon="heart" name="/layout/heart" />
      <var-bottom-navigation-item label="Label" icon="account-circle" name="/layout/account" />
    </var-bottom-navigation>
  </div>
</template>

<style lang="less" scoped>
.layout {
  padding: 70px 16px;
  overflow-y: auto;
  height: 100vh;
}
</style>
