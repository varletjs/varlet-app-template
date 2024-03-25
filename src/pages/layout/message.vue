<script setup lang="ts">
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <var-pull-refresh
    class="pt-[calc(var(--app-bar-height)+10px)] pb-[10px]"
    v-model="isRefresh"
    @refresh="handleRefresh"
  >
    <app-header>
      <template #left>
        <app-side-menu />
      </template>
      <template #right>
        <app-locale-switch />
        <app-theme-switch />
      </template>
    </app-header>

    <div class="flex py-[12px]" v-for="i in 20" :key="i">
      <var-avatar class="flex-shrink-0 mx-[18px]" src="@/assets/images/avatar.jpg" size="12vmin" />
      <div class="w-[274px] b-b border-outline">
        <div class="flex justify-between items-center">
          <div class="text-lg w-[190px] text-inverse-surface">
            <var-ellipsis style="max-width: 100%" :tooltip="false">{{ $t('Section title') }}</var-ellipsis>
          </div>
          <div class="text-md text-tertiary mb-[2px]">2023-07-27</div>
        </div>
        <div class="text-md text-tertiary mt-[6px]">
          <var-ellipsis :line-clamp="2" :tooltip="false">{{ $t('Section Text') }}</var-ellipsis>
        </div>
      </div>
    </div>
  </var-pull-refresh>

  <router-stack-view />
</template>

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
