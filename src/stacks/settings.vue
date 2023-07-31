<template>
  <router-stack>
    <div class="settings">
      <app-header :title="$t('Settings')">
        <template #left>
          <app-back />
        </template>
      </app-header>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.settings {
  padding: var(--app-bar-height) 0 0;
}
</style>
