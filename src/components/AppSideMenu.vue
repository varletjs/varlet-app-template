<script setup lang="ts">
const { pushStack } = useAppRouter()
const show = ref(false)
</script>

<template>
  <var-button class="app-side-menu" text round @click="show = !show" v-bind="$attrs">
    <var-icon class="app-side-menu-icon" name="menu" />
  </var-button>

  <var-popup position="left" v-model:show="show">
    <div class="app-side-menu-content">
      <div class="app-side-menu-profile">
        <div class="app-side-menu-avatar">
          <var-avatar src="@/assets/images/avatar.jpg" size="large" />
        </div>
        <div class="app-side-menu-description">
          <div class="app-side-menu-username">{{ $t('Your Name') }}</div>
          <div class="app-side-menu-email">{{ $t('Your Email Address') }}</div>
        </div>
      </div>

      <div class="app-side-menu-cell-list">
        <var-space direction="column">
          <var-cell class="app-side-menu-cell" :title="$t('Sign In')" v-ripple @click="pushStack('/sign-in')">
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="image" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Sign Up')" v-ripple @click="pushStack('/sign-up')">
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="image" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Settings')" v-ripple @click="pushStack('/settings')">
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="cog" />
            </template>
          </var-cell>

          <var-divider />

          <var-cell class="app-side-menu-cell" :title="$t('Close')" v-ripple @click="show = false">
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="window-close" />
            </template>
          </var-cell>
        </var-space>
      </div>
    </div>
  </var-popup>
</template>

<style lang="less" scoped>
.app-side-menu {
  &-icon {
    font-size: 26px;
  }

  &-content {
    width: 300px;
  }

  &-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    height: 170px;
    background: url('@/assets/images/material.jpg');
    background-size: cover;
  }

  &-description {
    color: #fff;
  }

  &-username {
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
  }

  &-email {
    margin-top: 6px;
    font-size: 14px;
  }

  &-cell-list {
    padding: 10px 4px;
    height: calc(var(--app-height) - 170px);
    overflow: auto;
  }

  &-cell {
    border-radius: 4px;
  }

  &-cell-icon {
    margin-right: 20px;
  }
}
</style>
