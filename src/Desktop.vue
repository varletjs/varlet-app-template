<script setup lang="ts">
const { iframeRef } = useDesktop()
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <iframe ref="iframeRef" style="width: 500px" class="h-full border-none" src="./index.html"></iframe>
  </div>
</template>
