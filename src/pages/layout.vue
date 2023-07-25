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
      <var-bottom-navigation-item :label="$t('HOME')" icon="home" name="/layout/home" />
      <var-bottom-navigation-item label="TODO" icon="heart" name="/layout/todo" />
      <var-bottom-navigation-item label="TODO" icon="heart" name="/layout/todo" />
      <var-bottom-navigation-item :label="$t('PROFILE')" icon="account-circle" name="/layout/profile" />
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
