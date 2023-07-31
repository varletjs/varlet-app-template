<script setup lang="ts">
const isRefresh = ref(false)
const active = ref<number[]>([])

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div class="topic">
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
            <div class="topic-item" :class="{ 'topic-item-active': active.includes(i - 1) }">
              <div class="topic-item-icon">
                <var-icon name="heart" size="6vmin" />
              </div>
              <span class="topic-item-title">{{ $t('Topic') }} {{ i }}</span>
            </div>
          </template>

          <div class="topic-item-child" v-for="j in 5" :key="j" v-ripple="{ color: 'var(--color-primary)' }">
            <span class="topic-item-child-title">{{ $t('Child topic') }} {{ i }} - {{ j }}</span>
          </div>
        </var-collapse-item>
      </var-collapse>
    </var-pull-refresh>
  </div>

  <router-stack-view />
</template>

<style lang="less" scoped>
.topic {
  --collapse-header-padding: 0 20px;
  padding: calc(var(--app-bar-height) + 1px) 0 0;

  &-item {
    display: flex;
    align-items: center;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    &-child {
      display: flex;
      align-items: center;
      height: 50px;
      padding-left: 74px;
      font-size: var(--collapse-header-font-size);
    }

    &-active {
      color: var(--color-primary);
    }
  }
}
</style>

<route>
  {
    meta: {
      stacks: [
        {
          name: 'sign-in',
          children: [
            {
              name: 'sign-up'
            },
            {
              name: 'forgot-password'
            }
          ]
        },
        {
          name: 'sign-up'
        },
        {
          name: 'settings'
        }
      ]
    }
  }
</route>
