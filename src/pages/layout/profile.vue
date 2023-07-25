<script setup lang="ts">
const active = ref('module')
const isRefresh = ref(false)

function handleRefresh() {
  isRefresh.value = false
}
</script>

<template>
  <div class="profile">
    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <app-header>
        <template #left>
          <app-side-menu />
        </template>
        <template #right>
          <app-locale-switch />
          <app-theme-switch />
        </template>
        <template #content>
          <div class="profile-header-content">
            <div class="profile-user-container">
              <var-avatar class="profile-user-avatar" src="@/assets/images/avatar.jpg" size="22vmin" bordered />
              <div class="profile-user-suffix">
                <div class="profile-username">{{ $t('Your Name') }}</div>
                <var-space class="profile-user-extra-container" :size="[0, '1.6vmin']">
                  <span>{{ $t('Male') }}</span>
                  <span>/</span>
                  <span>100 {{ $t('Followers') }}</span>
                  <span>/</span>
                  <span>49 {{ $t('Likes') }}</span>
                </var-space>
              </div>
            </div>
            <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
              <var-tab name="module">{{ $t('Modules') }}</var-tab>
              <var-tab name="profile">{{ $t('Profile') }}</var-tab>
            </var-tabs>
          </div>
        </template>
      </app-header>
      <var-tabs-items class="profile-tabs-items" v-model:active="active">
        <var-tab-item name="module">
          <var-space direction="column" :size="['6vmin', 0]">
            <var-space class="profile-module-grid" :size="['3.5vmin', '3.5vmin']">
              <div class="profile-module-grid-item" v-for="i in 9" :key="i">
                <var-paper
                  class="profile-module-grid-item-paper"
                  width="22vmin"
                  height="22vmin"
                  ripple
                  :radius="10"
                  :elevation="1"
                >
                  <var-icon name="card-account-details" color="var(--color-primary)" size="11vmin" />
                  <span class="profile-module-grid-item-text">{{ $t('Module') }}</span>
                </var-paper>
              </div>
            </var-space>

            <var-divider />

            <var-space class="profile-module-cell" direction="column" :size="['7vmin', 0]">
              <var-paper class="profile-module-cell-item" ripple :radius="10" :elevation="1" v-for="i in 6" :key="i">
                <var-icon name="fire" color="var(--color-primary)" size="11vmin" />
                <div class="profile-module-cell-item-suffix">
                  <div class="profile-module-cell-item-suffix-title">{{ $t('Module') }}</div>
                  <div class="profile-module-cell-item-suffix-subtitle">
                    <var-ellipsis style="max-width: 100%" :tooltip="false">{{
                      $t('Module introductory text')
                    }}</var-ellipsis>
                  </div>
                </div>
              </var-paper>
            </var-space>
          </var-space>
        </var-tab-item>

        <var-tab-item name="profile"> </var-tab-item>
      </var-tabs-items>
    </var-pull-refresh>

    <var-fab type="primary" right="5vmin" bottom="20vmin" drag>
      <var-button class="action" type="primary" round>
        <var-icon name="phone" />
      </var-button>
      <var-button class="action" type="primary" round>
        <var-icon name="star" />
      </var-button>
      <var-button class="action" type="primary" round>
        <var-icon name="heart" />
      </var-button>
    </var-fab>
  </div>
</template>

<style lang="less" scoped>
.profile {
  --profile-header-height: 202px;
  --avatar-border: 3px solid #fff;
  padding: calc(var(--profile-header-height) + 16px) 14px 16px;

  &-user-container {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 104px;
  }

  &-user-suffix {
    margin-left: 14px;
  }

  &-username {
    font-size: 24px;
  }

  &-user-avatar {
    flex-shrink: 0;
  }

  &-user-extra-container {
    padding-top: 10px;
    color: #ccc;
    font-size: 14px;
    align-items: baseline;
  }

  &-module-grid {
    transform: translateX(1.75vmin);

    &-item {
      padding: 10px;

      &-paper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      &-text {
        color: var(--app-title-color);
        margin-top: 3px;
      }
    }
  }

  &-module-cell {
    padding: 10px;

    &-item {
      display: flex;
      padding: 16px 28px;

      &-suffix {
        width: 50vmin;
        margin-left: 24px;

        &-title {
          color: var(--app-title-color);
        }

        &-subtitle {
          color: var(--app-subtitle-color);
          margin-top: 2px;
        }
      }
    }
  }
}
</style>
