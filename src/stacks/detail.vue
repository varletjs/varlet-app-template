<script setup lang="ts">
import { ref } from 'vue'

const isRefresh = ref(false)
const activeHeart = ref(false)

function handleRefresh() {
  isRefresh.value = false
}

function toggleHeart() {
  activeHeart.value = !activeHeart.value
}
</script>

<template>
  <router-stack>
    <div class="detail">
      <app-header :title="$t('Card Title')">
        <template #left>
          <app-back />
        </template>
        <template #right>
          <var-menu close-on-click-reference placement="bottom-end" offset-y="2vmin">
            <var-button class="detail-menu-button" text round>
              <var-icon class="detail-menu-button-icon" name="dots-vertical" />
            </var-button>

            <template #menu>
              <var-cell icon="heart" ripple> {{ $t('ACTION') }} </var-cell>
              <var-cell icon="star" ripple> {{ $t('ACTION') }} </var-cell>
              <var-cell icon="delete" ripple> {{ $t('ACTION') }} </var-cell>
            </template>
          </var-menu>
        </template>
      </app-header>

      <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
        <div class="detail-swipe">
          <var-swipe>
            <var-swipe-item>
              <var-image fit="cover" height="54vmin" src="@/assets/images/material-2.png" />
            </var-swipe-item>
            <var-swipe-item>
              <var-image fit="cover" height="54vmin" src="@/assets/images/material-2.png" />
            </var-swipe-item>
            <var-swipe-item>
              <var-image fit="cover" height="54vmin" src="@/assets/images/material-2.png" />
            </var-swipe-item>
          </var-swipe>

          <var-fab :fixed="false" :teleport="false" bottom="-7vmin">
            <template #trigger>
              <var-button class="detail-fab" type="primary" color="#EC407A" round @click="toggleHeart">
                <var-icon
                  :name="activeHeart ? 'heart' : 'heart-outline'"
                  animation-class="detail-fade-animation"
                  :transition="300"
                  size="6vmin"
                />
              </var-button>
            </template>
          </var-fab>
        </div>

        <div class="detail-info">
          <div class="detail-info-title">{{ $t('Card Title') }}</div>
          <div class="detail-info-subtitle">{{ $t('Card Subtitle') }}</div>
          <div class="detail-info-description">{{ $t('Card Description') }}</div>
        </div>

        <var-divider margin="7vmin 0" />

        <div class="detail-comment">
          <div class="detail-comment-subtitle">{{ $t('Comment Information Area') }}</div>
          <div class="detail-comment-chips">
            <var-space :size="['5vmin', '4vmin']">
              <var-chip v-for="i in 8" :key="i">
                <template #left>
                  <var-avatar class="detail-comment-avatar" src="@/assets/images/avatar.jpg" />
                </template>
                <var-ellipsis style="max-width: 26vmin" :tooltip="{ sameWidth: false }">
                  {{ $t('This is a comment') }}
                </var-ellipsis>
              </var-chip>
            </var-space>
          </div>

          <div class="detail-comment-footer">
            <var-rate
              class="detail-comment-rate"
              size="6vmin"
              half
              empty-color="#FFC107"
              color="#FFC107"
              readonly
              :gap="2"
              :model-value="3.5"
            />

            <div class="detail-comment-total">{{ $t('A total of {count} comments', { count: 100 }) }}</div>
          </div>
        </div>

        <div class="detail-actions">
          <var-button class="detail-action" block type="primary">
            <var-icon name="star" />
            <span class="detail-action-text">
              {{ $t('ACTION BUTTON') }}
            </span>
            <var-icon name="star" />
          </var-button>
        </div>
      </var-pull-refresh>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.detail {
  padding: calc(var(--app-bar-height)) 0 0;

  &-fade-animation {
    transition-property: opacity, transform;
    transform: rotate(45deg);
    opacity: 0;
  }

  &-fab {
    padding: 16px;
  }

  &-menu-button {
    &-icon {
      font-size: 22px;
    }
  }

  &-swipe {
    position: relative;
  }

  &-info {
    padding: 1px 0;

    &-title {
      max-width: 320px;
      font-size: var(--card-title-font-size);
      padding: var(--card-title-padding);
      margin: var(--card-title-margin);
      color: var(--card-title-color);
    }

    &-subtitle {
      font-size: var(--card-subtitle-font-size);
      color: var(--card-subtitle-color);
      padding: var(--card-subtitle-padding);
      margin: var(--card-subtitle-margin);
    }

    &-description {
      font-size: var(--card-description-font-size);
      color: var(--card-description-color);
      margin: var(--card-description-margin);
      padding: var(--card-description-padding);
      line-height: 1.5;
    }
  }

  &-comment {
    padding: 0 14px;
    --chip-normal-padding: 0 2.666667vmin 0 0;

    &-subtitle {
      font-size: 14px;
      color: var(--app-subtitle-color);
    }

    &-avatar {
      width: 32px;
      height: 32px;
      margin-right: 2px;
    }

    &-chips {
      margin-top: 28px;
    }

    &-footer {
      display: flex;
      align-items: center;
      margin-top: 28px;
    }

    &-rate {
      --rate-action-padding: 0;
      width: auto;
      margin-right: 12px;
    }

    &-total {
      color: var(--app-subtitle-color);
      font-size: 14px;
      font-weight: bold;
    }
  }

  &-actions {
    padding: 28px 14px 34px;
  }

  &-action-text {
    margin: 0 10px;
  }
}
</style>
