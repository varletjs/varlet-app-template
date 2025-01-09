<script setup lang="ts">
const { isDark, toggleDark } = useDark()
</script>

<template>
  <var-button text round @click="toggleDark">
    <var-icon v-if="isDark" class="text-[22px]!" name="weather-night" />
    <var-icon v-else class="text-[22px]!" name="white-balance-sunny" />
  </var-button>
</template>
