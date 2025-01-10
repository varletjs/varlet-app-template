<script setup lang="ts">
const { iframeRef } = useDesktop()
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <iframe ref="iframeRef" style="width: 500px" class="h-full border-none" src="./index.html"></iframe>
  </div>
</template>
