<script setup lang="ts">
import { codeToHtml } from 'shiki'

const { isDark } = useDark()
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" :theme="isDark ? 'vitesse-dark' : 'vitesse-light'">
    <router-view />
  </var-highlighter-provider>
</template>
