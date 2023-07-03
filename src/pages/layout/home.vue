<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)
const isRefresh = ref(false)

function refresh() {
  setTimeout(() => {
    isRefresh.value = false
  }, 2000)
}

function handleClick() {
  router.push('/layout/home/list')
}
</script>

<template>
  <div class="home">
    <app-header>
      <template #left>
        <app-side-menu />
      </template>
      <template #right>
        <app-locale-switch />
        <app-theme-switch />
      </template>
      <template #content>
        <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
          <var-tab>{{ $t('Card List') }}</var-tab>
          <var-tab>{{ $t('Card List') }}</var-tab>
          <var-tab>{{ $t('Card List') }}</var-tab>
        </var-tabs>
      </template>
    </app-header>

    <var-pull-refresh v-model="isRefresh" @refresh="refresh">
      <var-tabs-items v-model:active="active">
        <var-tab-item class="home-tab-item">
          <var-space class="home-tab-item-space" direction="column" size="large">
            <var-card
              :title="$t('Card Title')"
              :subtitle="$t('Card Subtitle')"
              src="@/assets/material-2.png"
              ripple
              v-for="i in 5"
              :key="i"
              @click="handleClick"
            >
              <template #description>
                <var-ellipsis class="var-card__description" :line-clamp="6" :tooltip="false">
                  {{ $t('Card Description') }}
                </var-ellipsis>
              </template>
              <template #extra>
                <var-space>
                  <var-button text type="primary" @touchstart.stop @click.stop>ACTION 1</var-button>
                  <var-button text type="primary" @touchstart.stop @click.stop>ACTION 2</var-button>
                </var-space>
              </template>
            </var-card>
          </var-space>
        </var-tab-item>
        <var-tab-item class="home-tab-item">
          <var-space class="home-tab-item-space" direction="column" size="large">
            <var-card
              :title="$t('Card Title')"
              :subtitle="$t('Card Subtitle')"
              src="@/assets/material-1.png"
              layout="row"
              ripple
              v-for="i in 10"
              :key="i"
              @click="handleClick"
            >
              <template #extra>
                <var-button text round @touchstart.stop @click.stop>
                  <var-icon name="star" />
                </var-button>
                <var-button round text @touchstart.stop @click.stop>
                  <var-icon name="heart" />
                </var-button>
              </template>
            </var-card>
          </var-space>
        </var-tab-item>
        <var-tab-item class="home-tab-item">
          <var-space class="home-tab-item-space" direction="column" size="large">
            <var-card
              :title="$t('Card Title')"
              :subtitle="$t('Card Subtitle')"
              ripple
              v-for="i in 5"
              :key="i"
              @click="handleClick"
            >
              <template #description>
                <var-ellipsis class="var-card__description" :line-clamp="6" :tooltip="false">
                  {{ $t('Card Description') }}
                </var-ellipsis>
              </template>
            </var-card>
          </var-space>
        </var-tab-item>
      </var-tabs-items>
    </var-pull-refresh>
  </div>

  <router-stack-view animation="slide-y" />
</template>

<style lang="less" scoped>
.home {
  --home-header-height: 98px;
  padding: calc(var(--home-header-height) + 16px) 14px 16px;

  &-tab-item {
    min-height: calc(100vh - 190px);
  }

  &-tab-item-space {
    padding: 4px;
  }
}
</style>
