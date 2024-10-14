<script setup lang="ts">
import { useDark } from './use'
import { codeToHtml } from 'shiki'

const { isDark } = useDark()
</script>

<template>
  <var-highlighter-provider :highlighter="{ codeToHtml }" :theme="isDark ? 'vitesse-dark' : 'vitesse-light'">
    <router-view />
  </var-highlighter-provider>
</template>
