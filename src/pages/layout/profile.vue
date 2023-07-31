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
            <div class="profile-user">
              <var-avatar class="profile-user-avatar" src="@/assets/images/avatar.jpg" size="22vmin" bordered />
              <div class="profile-user-suffix">
                <div class="profile-user-name">{{ $t('Your Name') }}</div>
                <var-space class="profile-user-extra" :size="[0, '1.6vmin']">
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
          <var-space class="profile-module" direction="column" :size="['1.8vmin', 0]">
            <var-space class="profile-module-grid" :size="['2.6vmin', '2.6vmin']">
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

        <var-tab-item name="profile">
          <var-space class="profile-detail" direction="column" :size="['6vmin', 0]">
            <div class="profile-detail-section">
              <div class="profile-detail-section-subtitle">{{ $t('About Me') }}</div>
              <div class="profile-detail-section-description">{{ $t('Section Text') }}</div>
            </div>

            <div class="profile-detail-section">
              <div class="profile-detail-section-subtitle">{{ $t('Section') }}</div>
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
                  <var-icon class="profile-detail-section-icon" name="account-circle" size="10vmin" />
                </template>
              </var-cell>
            </div>

            <div class="profile-detail-section">
              <div class="profile-detail-section-subtitle">{{ $t('Section') }}</div>
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
                  <var-icon class="profile-detail-section-icon" name="shopping" size="10vmin" />
                </template>
              </var-cell>
            </div>

            <div class="profile-detail-section">
              <div class="profile-detail-section-subtitle">{{ $t('Followers') }} (10086)</div>
              <var-avatar-group class="profile-detail-section-avatar-group" offset="-2vmin">
                <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="12vmin" v-for="i in 7" :key="i" />
                <var-avatar size="13vmin">+10086</var-avatar>
              </var-avatar-group>
            </div>

            <var-divider />

            <div class="profile-detail-section">
              <div class="profile-detail-section-subtitle">{{ $t('Following') }} (10086)</div>
              <var-avatar-group class="profile-detail-section-avatar-group">
                <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="12vmin" v-for="i in 7" :key="i" />
                <var-avatar size="13vmin">+10086</var-avatar>
              </var-avatar-group>
            </div>
          </var-space>
        </var-tab-item>
      </var-tabs-items>
    </var-pull-refresh>

    <var-fab
      type="primary"
      right="5vmin"
      bottom="20vmin"
      :drag="{ boundary: { left: '2vmin', right: '2vmin', top: '55vmin', bottom: '15vmin' } }"
    >
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

  <router-stack-view />
</template>

<style lang="less" scoped>
.profile {
  --profile-header-height: 202px;
  --avatar-border: 3px solid #fff;
  padding-top: calc(var(--profile-header-height) + 16px);

  &-user {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 104px;

    &-suffix {
      margin-left: 14px;
    }

    &-name {
      font-size: 24px;
    }

    &-avatar {
      flex-shrink: 0;
    }

    &-extra {
      padding-top: 10px;
      color: #ccc;
      font-size: 14px;
      align-items: baseline;
    }
  }

  &-module {
    padding: 0 14px 30px;

    &-grid {
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
          font-size: 15px;
          margin-top: 3px;
        }
      }
    }

    &-cell {
      padding: 10px;

      &-item {
        display: flex;
        padding: 16px 28px;

        &-suffix {
          width: 50vmin;
          margin-left: 24px;

          &-title {
            font-size: 15px;
            color: var(--app-title-color);
            margin-top: 2px;
          }

          &-subtitle {
            font-size: 14px;
            color: var(--app-subtitle-color);
            margin-top: 2px;
          }
        }
      }
    }
  }

  &-detail {
    --cell-padding: 16px 20px;
    padding-bottom: 30px;
    margin-top: 4px;

    &-section {
      margin-top: 10px;

      &-subtitle {
        color: var(--app-subtitle-color);
        font-size: 15px;
        margin-bottom: 14px;
        padding: 0 24px;
      }

      &-description {
        font-size: 15px;
        line-height: 28px;
        padding: 0 24px;
      }

      &-icon {
        margin-right: 24px;
      }

      &-avatar-group {
        margin-top: 12px;
        padding: 0 20px;
      }
    }
  }
}
</style>

<route>
  {
    meta: {
      stacks: [
        {
          name: 'sign-in',
          children: [
            {
              name: 'sign-up'
            },
            {
              name: 'forgot-password'
            }
          ]
        },
        {
          name: 'sign-up'
        },
        {
          name: 'settings'
        }
      ]
    }
  }
</route>
