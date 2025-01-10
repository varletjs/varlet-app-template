<template>
  <div class="p-[10px]">
    <var-space direction="column" :size="['7vmin', 0]">
      <var-paper v-for="i in 6" :key="i" class="flex items-center px-[28px] py-[18px]" ripple :elevation="1">
        <var-icon name="fire" color="var(--color-primary)" size="11vmin" />
        <div class="ml-[24px] w-[50vmin]">
          <div class="text-lg">{{ $t('Module') }}</div>
          <div class="text-md text-tertiary mt-[4px]">
            <var-ellipsis style="max-width: 100%" :tooltip="false">{{ $t('Module introductory text') }}</var-ellipsis>
          </div>
        </div>
      </var-paper>
    </var-space>
  </div>
</template>
