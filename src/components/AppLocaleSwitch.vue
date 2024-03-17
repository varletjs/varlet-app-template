<script setup lang="ts">
import { Locale, i18n, setLocale } from '@/i18n'

const show = ref(false)

function getActiveStyles(locale: Locale) {
  return {
    color: i18n.global.locale.value === locale ? 'var(--color-primary)' : undefined,
    backgroundColor: i18n.global.locale.value === locale ? 'var(--app-cell-active-background)' : undefined
  }
}

function handleCellClick(locale: Locale) {
  setLocale(locale)
  show.value = false
}
</script>

<template>
  <var-menu close-on-click-reference placement="bottom" offset-y="2vmin" v-model:show="show">
    <var-button text round>
      <var-icon class="text-[22px]!" name="translate" />
    </var-button>

    <template #menu>
      <var-cell ripple :style="getActiveStyles('zh-CN')" @click="() => handleCellClick('zh-CN')"> 中文 </var-cell>
      <var-cell ripple :style="getActiveStyles('en-US')" @click="() => handleCellClick('en-US')"> English </var-cell>
    </template>
  </var-menu>
</template>
