<script setup lang="ts">
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div class="message">
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

      <div class="message-list">
        <div class="message-item" v-for="i in 20" :key="i">
          <var-avatar class="message-item-avatar" src="@/assets/images/avatar.jpg" size="12vmin" />
          <div class="message-item-detail">
            <div class="message-item-detail-header">
              <div class="message-item-detail-header-name">
                <var-ellipsis style="max-width: 100%" :tooltip="false">{{ $t('Section title') }}</var-ellipsis>
              </div>
              <div class="message-item-detail-header-date">2023-07-27</div>
            </div>
            <div class="message-item-detail-description">
              <var-ellipsis :line-clamp="2" :tooltip="false">{{ $t('Section Text') }}</var-ellipsis>
            </div>
          </div>
        </div>
      </div>
    </var-pull-refresh>
  </div>

  <router-stack-view />
</template>

<style lang="less" scoped>
.message {
  padding: calc(var(--app-bar-height)) 0 0;

  &-list {
    padding: 10px 0;
  }

  &-item {
    position: relative;
    display: flex;
    padding-top: 20px;

    &-avatar {
      flex-shrink: 0;
      margin: 0 18px;
    }

    &-detail {
      width: 274px;
      border-bottom: thin solid var(--divider-color);
      padding-bottom: 20px;

      &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-name {
          color: var(--app-title-color);
          font-size: 16px;
          width: 190px;
        }

        &-date {
          color: var(--app-subtitle-color);
          font-size: 14px;
          margin-bottom: 2px;
        }
      }

      &-description {
        color: var(--app-subtitle-color);
        font-size: 15px;
        margin-top: 6px;
      }
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
