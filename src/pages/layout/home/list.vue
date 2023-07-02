<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const finished = ref(false)
const list = ref<number[]>([])

function load() {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }

    loading.value = false

    if (list.value.length >= 60) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <router-stack>
    <div class="list">
      <app-header>
        <template #left>
          <app-back />
        </template>
      </app-header>
      <var-list :finished="finished" v-model:loading="loading" @load="load">
        <var-cell :key="item" v-for="item in list"> List Item: {{ item }} </var-cell>
      </var-list>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.list {
  padding: calc(var(--app-bar-height) + 16px) 16px 16px;
}
</style>
