<script setup lang="ts">
import Profile from './components/Profile.vue'
import CellItems from './components/CellItems.vue'
import ModuleItems from './components/ModuleItems.vue'
import ModuleRowItems from './components/ModuleRowItems.vue'
import ProfileDetail from './components/ProfileDetail.vue'

const active = ref('module')
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div class="profile">
    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <app-header>
        <template #left>
          <app-side-menu />
        </template>
        <template #right>
          <app-locale-switch />
          <app-theme-switch />
        </template>
        <template #content>
          <profile />
          <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
            <var-tab name="module">{{ $t('Modules') }}</var-tab>
            <var-tab name="profile">{{ $t('Profile') }}</var-tab>
          </var-tabs>
        </template>
      </app-header>
      <var-tabs-items v-model:active="active">
        <var-tab-item name="module">
          <var-space class="pb-[30px] px-[14px]" direction="column" :size="['1.8vmin', 0]">
            <module-items />

            <var-divider />

            <module-row-items />

            <var-divider />

            <cell-items />
          </var-space>
        </var-tab-item>

        <var-tab-item name="profile">
          <profile-detail />
        </var-tab-item>
      </var-tabs-items>
    </var-pull-refresh>

    <var-fab
      type="primary"
      right="5vmin"
      bottom="20vmin"
      :drag="{ boundary: { left: '2vmin', right: '2vmin', top: '55vmin', bottom: '15vmin' } }"
    >
      <var-button class="action" type="info" round icon-container>
        <var-icon name="star" />
      </var-button>
      <var-button class="action" type="warning" round icon-container>
        <var-icon name="phone" />
      </var-button>
      <var-button class="action" type="danger" round icon-container>
        <var-icon name="heart" />
      </var-button>
    </var-fab>
  </div>

  <router-stack-view />
</template>

<style lang="less" scoped>
.profile {
  --profile-header-height: 202px;
  --avatar-border: 3px solid #fff;
  padding-top: calc(var(--profile-header-height) + 16px);

  &-detail {
    --cell-padding: 16px 20px;
    padding-bottom: 30px;
    margin-top: 4px;

    &-section {
      margin-top: 10px;

      &-subtitle {
        color: var(--app-subtitle-color);
        font-size: 15px;
        margin-bottom: 14px;
        padding: 0 24px;
      }

      &-description {
        font-size: 15px;
        line-height: 28px;
        padding: 0 24px;
      }

      &-icon {
        margin-right: 24px;
      }

      &-avatar-group {
        margin-top: 12px;
        padding: 0 20px;
      }
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
