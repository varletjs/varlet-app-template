<script setup lang="ts">
import { Context } from '@varlet/ui'

defineProps({
  title: {
    type: String
  },
  showBack: {
    type: Boolean,
    default: true
  },
  showThemeSwitch: {
    type: Boolean,
    default: true
  },
  showI18nSwitch: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <header class="app-header" :style="{ 'z-index': Context.zIndex }">
    <var-app-bar safe-area-top :title="title" title-position="center">
      <template #left>
        <slot name="left">
          <app-back v-if="showBack" />
        </slot>
      </template>

      <template #right>
        <slot name="right">
          <var-space class="app-header-right" :size="[0, '1.4vmin']">
            <app-theme-switch v-if="showThemeSwitch" />
            <app-locale-switch v-if="showI18nSwitch" />
          </var-space>
        </slot>
      </template>

      <template #content>
        <slot name="content" />
      </template>
    </var-app-bar>
  </header>
</template>

<style lang="less" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &-right {
    padding-right: 4px;
  }
}
</style>
