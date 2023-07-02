<script setup lang="ts">
const show = ref(false)

function showMenu() {
  show.value = true
}

function closeMenu() {
  show.value = false
}
</script>

<template>
  <var-button class="app-side-menu" text round @click="showMenu">
    <var-icon class="app-side-menu-icon" name="menu" />
  </var-button>

  <var-popup position="left" v-model:show="show">
    <div class="app-side-menu-content">
      <div class="app-side-menu-profile">
        <div class="app-side-menu-avatar">
          <var-avatar src="@/assets/avatar.jpg" size="large" />
        </div>
        <div class="app-side-menu-description">
          <div class="app-side-menu-username">{{ $t('Your Name') }}</div>
          <div class="app-side-menu-email">{{ $t('Your Email Address') }}</div>
        </div>
      </div>

      <div class="app-side-menu-cell-list">
        <var-space direction="column">
          <var-cell class="app-side-menu-cell" :title="$t('Menu')" v-ripple>
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="bell" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Menu')" v-ripple>
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="bell" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Menu')" v-ripple>
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="bell" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Menu')" v-ripple>
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="bell" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Menu')" v-ripple>
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="bell" />
            </template>
          </var-cell>
          <var-cell class="app-side-menu-cell" :title="$t('Settings')" v-ripple>
            <template #icon>
              <var-icon class="app-side-menu-cell-icon" name="cog" />
            </template>
          </var-cell>

          <var-divider />

          <var-cell class="app-side-menu-cell" :title="$t('Close')" v-ripple @click="closeMenu">
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
    background: url('@/assets/material.jpg');
    background-size: cover;
  }

  &-description {
    color: #fff;
  }

  &-username {
    margin-top: 12px;
    font-weight: 500;
    font-size: 18px;
  }

  &-email {
    margin-top: 8px;
    font-size: 14px;
  }

  &-cell-list {
    padding: 10px 4px;
    height: calc(100vh - 170px);
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
