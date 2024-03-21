<script setup lang="ts">
import { ref } from 'vue'

const isMobile = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
</script>

<template>
  <slot v-if="isMobile" />

  <div class="flex flex-col min-h-screen justify-center items-center px-[14px]" v-else>
    <var-result
      class="max-w-[350px]"
      type="warning"
      :title="$t('Warning')"
      :description="$t('Please use mobile visit')"
    />
  </div>
</template>
