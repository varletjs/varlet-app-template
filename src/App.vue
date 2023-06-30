<script setup lang="ts">
import { useDark } from './use'

const { updateTheme } = useDark()

updateTheme()
</script>

<template>
  <app-mobile-detector>
    <router-view />
  </app-mobile-detector>
</template>
