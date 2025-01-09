<script setup lang="ts">
const { pushStack } = useAppRouter()
const show = ref(false)
</script>

<template>
  <var-button class="ml-4px" text round v-bind="$attrs" @click="show = !show">
    <var-icon class="text-[24px]!" name="menu" />
  </var-button>

  <var-popup v-model:show="show" position="left">
    <div class="w-[300px]">
      <div class="flex h-[170px] flex-col justify-center bg-[url(@/assets/images/material.jpg)] bg-cover px-[20px]">
        <var-avatar src="@/assets/images/avatar.jpg" size="large" />

        <div class="text-white">
          <div class="fw-[500] mt-[10px] text-xl">{{ $t('Your Name') }}</div>
          <div class="text-md mt-[6px]">{{ $t('Your Email Address') }}</div>
        </div>
      </div>

      <div class="h-[calc(var(--app-height)-170px)] px-[4px] py-[10px]">
        <var-space direction="column">
          <var-cell v-ripple class="rounded-[4px]" :title="$t('Sign In')" @click="pushStack('/sign-in')">
            <template #icon>
              <var-icon class="mr-[20px]" name="image" />
            </template>
          </var-cell>
          <var-cell v-ripple class="rounded-[4px]" :title="$t('Sign Up')" @click="pushStack('/sign-up')">
            <template #icon>
              <var-icon class="mr-[20px]" name="image" />
            </template>
          </var-cell>
          <var-cell v-ripple class="rounded-[4px]" :title="$t('Settings')" @click="pushStack('/settings')">
            <template #icon>
              <var-icon class="mr-[20px]" name="cog" />
            </template>
          </var-cell>

          <var-divider />

          <var-cell v-ripple class="rounded-[4px]" :title="$t('Close')" @click="show = false">
            <template #icon>
              <var-icon class="mr-[20px]" name="window-close" />
            </template>
          </var-cell>
        </var-space>
      </div>
    </div>
  </var-popup>
</template>
