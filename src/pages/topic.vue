<script setup lang="ts">
const isRefresh = ref(false)
const active = ref<number[]>([])

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <var-style-provider
    class="pt-[calc(var(--app-bar-height)+1px)]"
    :style-vars="{ '--collapse-header-padding': '0 20px', '--collapse-content-padding': '0 20px' }"
  >
    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <app-header>
        <template #left>
          <app-side-menu />
        </template>
        <template #right>
          <app-locale-switch />
          <app-theme-switch />
        </template>
      </app-header>

      <var-collapse v-model="active" :elevation="0" :offset="false">
        <var-collapse-item v-for="i in 20" :key="i">
          <template #title>
            <div class="flex items-center" :class="{ 'color-primary': active.includes(i - 1) }">
              <div class="flex items-center justify-center w-[46px] h-[46px] mr-[15px]">
                <var-icon name="heart" size="6vmin" />
              </div>
              <span>{{ $t('Topic') }} {{ i }}</span>
            </div>
          </template>

          <div class="flex items-center" v-for="j in 5" :key="j" v-ripple="{ color: 'var(--color-primary)' }">
            <div class="flex items-center justify-center w-[46px] h-[46px] mr-[15px]">
              <var-icon name="star" size="6vmin" />
            </div>
            <span>{{ $t('Child topic') }} {{ i }} - {{ j }}</span>
          </div>
        </var-collapse-item>
      </var-collapse>
    </var-pull-refresh>
  </var-style-provider>

  <router-stack-view />
</template>

<style lang="less" scoped>
.topic {
  --collapse-header-padding: 0 20px;

  &-item {
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    &-child {
      padding: 0 7px;
    }
  }
}
</style>

<route lang="json">
{
  "meta": {
    "stacks": [
      "sign-up",
      "settings",
      {
        "name": "sign-in",
        "children": ["sign-up", "forgot-password"]
      }
    ]
  }
}
</route>
