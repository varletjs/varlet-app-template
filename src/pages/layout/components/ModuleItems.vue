<template>
  <div class="px-[10px]">
    <var-space :size="['2.6vmin', '1.7vmin']">
      <div class="p-[10px]" v-for="i in 9" :key="i">
        <var-paper
          class="flex flex-col justify-center items-center"
          width="22vmin"
          height="22vmin"
          ripple
          :radius="10"
          :elevation="1"
        >
          <var-icon name="card-account-details" color="var(--color-primary)" size="10vmin" />
          <span class="text-md mt-[4px]">{{ $t('Module') }}</span>
        </var-paper>
      </div>
    </var-space>
  </div>
</template>
