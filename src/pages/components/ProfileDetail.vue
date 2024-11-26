<template>
  <var-style-provider class="pb-[30px] mt-[4px]" :style-vars="{ '--cell-padding': '16px 20px' }">
    <var-space direction="column" :size="['6vmin', 0]">
      <div class="mt-[10px]">
        <div class="text-tertiary text-md mb-[14px] px-[24px]">{{ $t('About Me') }}</div>
        <div class="text-tertiary text-md px-[24px] line-height-[26px]">{{ $t('Section Text') }}</div>
      </div>

      <div class="mt-[10px]">
        <div class="text-tertiary text-md mb-[14px] px-[24px]">{{ $t('Section') }}</div>
        <var-cell
          border
          ripple
          :title="$t('Section title')"
          :description="$t('Section subtitle')"
          :border-offset="0"
          v-for="i in 4"
          :key="i"
        >
          <template #icon>
            <var-icon class="mr-[24px]" name="account-circle" size="10vmin" />
          </template>
        </var-cell>
      </div>

      <div class="mt-[10px]">
        <div class="text-tertiary text-md mb-[14px] px-[24px]">{{ $t('Section') }}</div>
        <var-cell
          border
          ripple
          :title="$t('Section title')"
          :description="$t('Section subtitle')"
          :border-offset="0"
          v-for="i in 4"
          :key="i"
        >
          <template #icon>
            <var-icon class="mr-[24px]" name="shopping" size="10vmin" />
          </template>
        </var-cell>
      </div>

      <div class="mt-[10px]">
        <div class="text-tertiary text-md mb-[14px] px-[24px]">{{ $t('Followers') }} (10086)</div>
        <var-avatar-group class="mt-[12px] px-[20px]" offset="-2vmin">
          <var-avatar src="https://varlet.pages.dev/cat.jpg" size="12vmin" v-for="i in 7" :key="i" />
          <var-avatar size="13vmin">+10086</var-avatar>
        </var-avatar-group>
      </div>

      <var-divider />

      <div class="mt-[10px]">
        <div class="text-tertiary text-md mb-[14px] px-[24px]">{{ $t('Following') }} (10086)</div>
        <var-avatar-group class="mt-[12px] px-[20px]">
          <var-avatar src="https://varlet.pages.dev/cat.jpg" size="12vmin" v-for="i in 7" :key="i" />
          <var-avatar size="13vmin">+10086</var-avatar>
        </var-avatar-group>
      </div>
    </var-space>
  </var-style-provider>
</template>
