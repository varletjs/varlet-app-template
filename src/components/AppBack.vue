<script setup lang="ts">
const { router } = useAppRouter()
</script>

<template>
  <var-button color="transparent" text-color="#fff" round text @click="router.back">
    <var-icon class="text-[30px]!" name="chevron-left" />
  </var-button>
</template>
