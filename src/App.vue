<script setup lang="ts">
import { useDark } from './use'

useDark()
</script>

<template>
  <app-mobile-detector>
    <router-view />
  </app-mobile-detector>
</template>
