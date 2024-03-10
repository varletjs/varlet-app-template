<script setup lang="ts">
import { ref, watch } from 'vue'

const { router, route } = useAppRouter()
const active = ref()

const tabs = ref([
  {
    label: 'HOME',
    icon: 'home',
    name: '/layout/home'
  },
  {
    label: 'TOPIC',
    icon: 'heart',
    name: '/layout/topic'
  },
  {
    label: 'MESSAGE',
    icon: 'border-radius',
    namespace: 'i',
    name: '/layout/message'
  },
  {
    label: 'PROFILE',
    icon: 'account-circle',
    name: '/layout/profile'
  }
])

watch(
  () => route.path,
  (newValue) => {
    active.value = newValue
  },
  { immediate: true }
)

function to(path: string) {
  router.replace(path)
}
</script>

<template>
  <div class="layout">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <var-bottom-navigation border safe-area fixed v-model:active="active">
      <var-bottom-navigation-item
        v-for="item in tabs"
        :key="item.label"
        :label="$t(item.label)"
        :icon="item.icon"
        :name="item.name"
        :namespace="item.namespace"
        @click="() => to(item.name)"
      />
    </var-bottom-navigation>
  </div>
</template>

<style lang="less" scoped>
.layout {
  padding-bottom: 51px;
  overflow-y: auto;
  height: var(--app-height);
}
</style>
