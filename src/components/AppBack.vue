<script setup lang="ts">
const { router } = useAppRouter()
</script>

<template>
  <var-button class="app-back" color="transparent" text-color="#fff" round text @click="router.back">
    <var-icon class="app-back-icon" name="chevron-left" />
  </var-button>
</template>

<style lang="less" scoped>
.app-back {
  &-icon {
    font-size: 30px;
  }
}
</style>
