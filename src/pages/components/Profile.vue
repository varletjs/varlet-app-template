<template>
  <div class="flex items-center px-[20px] h-[104px]">
    <var-avatar class="flex-shrink-0" src="@/assets/images/avatar.jpg" size="22vmin" bordered />
    <div class="ml-[14px]">
      <div class="text-4xl">{{ $t('Your Name') }}</div>
      <var-space class="pt-[10px] text-[#ccc]" :size="[0, '1.6vmin']">
        <span>{{ $t('Male') }}</span>
        <span>/</span>
        <span>100 {{ $t('Followers') }}</span>
        <span>/</span>
        <span>49 {{ $t('Likes') }}</span>
      </var-space>
    </div>
  </div>
</template>
