<script setup lang="ts">
import { AppBarProps } from '@varlet/ui'
import { PropType } from 'vue'

defineProps({
  title: {
    type: String as PropType<AppBarProps['title']>
  },
  titlePosition: {
    type: String as PropType<AppBarProps['titlePosition']>,
    default: 'center'
  }
})
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-[100]">
    <var-app-bar safe-area-top :title="title" :title-position="titlePosition">
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <var-space class="pr-[8px]" :size="[0, '1.4vmin']">
          <slot name="right" />
        </var-space>
      </template>

      <template #content>
        <slot name="content" />
      </template>
    </var-app-bar>
  </header>
</template>
