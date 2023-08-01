<script setup lang="ts">
import { ref } from 'vue'

const isMobile = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
</script>

<template>
  <slot v-if="isMobile" />

  <div class="result-container" v-else>
    <var-result class="result" type="warning" :title="$t('Warning')" :description="$t('Please use mobile visit')" />
  </div>
</template>

<style lang="less" scoped>
.result-container {
  width: 100%;
  min-height: var(--app-height);
  display: flex;
  justify-content: center;
  align-items: center;
}

.result {
  width: 40%;
  min-width: 375px;
}
</style>
