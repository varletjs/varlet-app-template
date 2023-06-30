<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref()

watch(() => active.value, router.replace)

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

    <var-bottom-navigation border safe-area fixed v-model:active="active">
      <var-bottom-navigation-item label="HOME" icon="home" name="/layout/home" />
      <var-bottom-navigation-item label="TODO" icon="magnify" name="/layout/search" />
      <var-bottom-navigation-item label="TODO" icon="heart" name="/layout/heart" />
      <var-bottom-navigation-item label="TODO" icon="account-circle" name="/layout/account" />
    </var-bottom-navigation>
  </div>
</template>

<style lang="less" scoped>
.layout {
  padding-bottom: 51px;
  overflow-y: auto;
  height: 100vh;
}
</style>
