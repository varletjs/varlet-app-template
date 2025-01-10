<script setup lang="ts">
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <var-pull-refresh
    v-model="isRefresh"
    class="pb-[10px] pt-[calc(var(--app-bar-height)+10px)]"
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

    <div v-for="i in 20" :key="i" class="flex py-[12px]">
      <var-avatar class="mx-[18px] flex-shrink-0" src="@/assets/images/avatar.jpg" size="12vmin" />
      <div class="b-b border-outline w-[274px]">
        <div class="flex items-center justify-between">
          <div class="text-inverse-surface w-[190px] text-lg">
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
