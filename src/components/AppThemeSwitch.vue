<script setup lang="ts">
import { useDark } from '@/use'

const { isDark, toggleDark } = useDark()
</script>

<template>
  <var-button class="app-theme-switch" text round @click="toggleDark">
    <var-icon class="app-theme-switch-icon" name="weather-night" v-if="isDark" />
    <var-icon class="app-theme-switch-icon" name="white-balance-sunny" v-else />
  </var-button>
</template>

<style lang="less" scoped>
.app-theme-switch {
  &-icon {
    font-size: 22px;
  }
}
</style>
@/use
