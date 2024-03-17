<script setup lang="ts">
const items = ref([
  {
    name: 'Vue',
    icon: 'star',
    enabled: false
  },
  {
    name: 'Vue',
    icon: 'star',
    enabled: false
  },
  {
    name: 'Vue',
    icon: 'star',
    enabled: false
  },
  {
    name: 'Vue',
    icon: 'star',
    enabled: false
  },
  {
    name: 'Vue',
    icon: 'star',
    enabled: false
  },
  {
    name: 'Vue',
    icon: 'star',
    enabled: false
  }
])
</script>

<template>
  <div class="pt-[10px] pb-[16px] px-[10px]">
    <var-paper :elevation="2">
      <var-cell
        v-for="(item, index) in items"
        :key="item.name"
        :icon="item.icon"
        :border="index !== items.length - 1"
        :border-offset="0"
      >
        {{ item.name }}

        <template #extra>
          <var-switch v-model="item.enabled" @click.stop />
        </template>
      </var-cell>
    </var-paper>
  </div>
</template>
