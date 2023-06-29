<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

function handleClick(path: string) {
  router.push(`/layout/home/list/${path}`)
}
</script>

<template>
  <router-stack>
    <div class="list">
      <var-space>
        <var-button type="primary" @click="handleClick('detail-one')">To Detail One</var-button>
        <var-button type="warning" @click="handleClick('detail-two')">To Detail Two</var-button>
      </var-space>

      <var-list style="margin-top: 14px" :finished="finished" v-model:loading="loading" @load="load">
        <var-cell :key="item" v-for="item in list"> List Item: {{ item }} </var-cell>
      </var-list>

      <var-space style="margin-top: 10px">
        <var-button type="primary" @click="handleClick('detail-one')">To Detail One</var-button>
        <var-button type="warning" @click="handleClick('detail-two')">To Detail Two</var-button>
      </var-space>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.list {
  padding: 16px;
}
</style>
