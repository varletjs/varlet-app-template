<script setup lang="ts">
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <header class="app-header">
    <var-app-bar safe-area-top :title="title" title-position="center">
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <var-space class="app-header-right" :size="[0, '1.4vmin']">
          <slot name="right" />
        </var-space>
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
  z-index: 100;

  &-right {
    padding-right: 8px;
  }
}
</style>
