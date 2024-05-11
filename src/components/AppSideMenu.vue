<script setup lang="ts">
const { pushStack } = useAppRouter()
const show = ref(false)
</script>

<template>
  <var-button class="ml-4px" text round @click="show = !show" v-bind="$attrs">
    <var-icon class="text-[24px]!" name="menu" />
  </var-button>

  <var-popup position="left" v-model:show="show">
    <div class="w-[300px]">
      <div class="flex flex-col justify-center px-[20px] h-[170px] bg-[url(@/assets/images/material.jpg)] bg-cover">
        <var-avatar src="@/assets/images/avatar.jpg" size="large" />

        <div class="text-white">
          <div class="mt-[10px] fw-[500] text-xl">{{ $t('Your Name') }}</div>
          <div class="mt-[6px] text-md">{{ $t('Your Email Address') }}</div>
        </div>
      </div>

      <div class="py-[10px] px-[4px] h-[calc(var(--app-height)-170px)]">
        <var-space direction="column">
          <var-cell class="rounded-[4px]" :title="$t('Sign In')" v-ripple @click="pushStack('/sign-in')">
            <template #icon>
              <var-icon class="mr-[20px]" name="image" />
            </template>
          </var-cell>
          <var-cell class="rounded-[4px]" :title="$t('Sign Up')" v-ripple @click="pushStack('/sign-up')">
            <template #icon>
              <var-icon class="mr-[20px]" name="image" />
            </template>
          </var-cell>
          <var-cell class="rounded-[4px]" :title="$t('Settings')" v-ripple @click="pushStack('/settings')">
            <template #icon>
              <var-icon class="mr-[20px]" name="cog" />
            </template>
          </var-cell>

          <var-divider />

          <var-cell class="rounded-[4px]" :title="$t('Close')" v-ripple @click="show = false">
            <template #icon>
              <var-icon class="mr-[20px]" name="window-close" />
            </template>
          </var-cell>
        </var-space>
      </div>
    </div>
  </var-popup>
</template>
