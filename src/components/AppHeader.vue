<script setup lang="ts">
import { Context } from '@varlet/ui'
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String
  },
  showBack: {
    type: Boolean,
    default: true
  },
  showTheme: {
    type: Boolean,
    default: true
  },
  showI18n: {
    type: Boolean,
    default: true
  }
})

const router = useRouter()

function back() {
  router.back()
}
</script>

<template>
  <header class="app-header" :style="{ zIndex: Context.zIndex }">
    <var-app-bar safe-area-top :title="title" title-position="center">
      <template #left>
        <slot name="left">
          <var-button color="transparent" text-color="#fff" round text @click="back" v-if="showBack">
            <var-icon class="app-header-icon" name="chevron-left" />
          </var-button>
        </slot>
      </template>

      <template #right>
        <slot name="right" />
      </template>

      <template #content>
        <slot name="content" />
      </template>
    </var-app-bar>
  </header>
</template>

<style lang="less" scoped>
.app-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;

  &-icon {
    font-size: 30px;
  }
}
</style>
