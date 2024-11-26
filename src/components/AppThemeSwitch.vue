<script setup lang="ts">
const { isDark, toggleDark } = useDark()
</script>

<template>
  <var-button text round @click="toggleDark">
    <var-icon class="text-[22px]!" name="weather-night" v-if="isDark" />
    <var-icon class="text-[22px]!" name="white-balance-sunny" v-else />
  </var-button>
</template>
