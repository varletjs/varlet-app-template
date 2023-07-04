<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApiGetCards, useApiGetPlainCards, useApiGetRowCards, CardModel } from '@/apis/card'
import { Response } from '@/apis/types'

interface CardList {
  data: CardModel[]
  current: number
  finished: boolean
  error: boolean
}

const router = useRouter()
const active = ref('card')
const isRefresh = ref(false)

const [card, loadCard, isCardLoading] = useApiGetCards<CardList>({
  data: {
    data: [],
    current: 1,
    error: false,
    finished: false
  },
  dataTransformer,
  errorTransformer(error) {
    card.value.error = true
    return error
  }
})

const [plainCard, loadPlainCard, isPlainCardLoading] = useApiGetPlainCards<CardList>({
  data: {
    data: [],
    current: 1,
    error: false,
    finished: false
  },
  dataTransformer,
  errorTransformer(error) {
    plainCard.value.error = true
    return error
  }
})

const [rowCard, loadRowCard, isRowCardLoading] = useApiGetRowCards<CardList>({
  data: {
    data: [],
    current: 1,
    error: false,
    finished: false
  },
  dataTransformer,
  errorTransformer(error) {
    rowCard.value.error = true
    return error
  }
})

function dataTransformer(response: Response<CardModel[]>, prev: CardList) {
  if (response.code !== 200) {
    return {
      ...prev,
      finished: false,
      error: true
    }
  }

  return {
    data: [...prev.data, ...response.data],
    current: prev.current + 1,
    finished: response.data.length < 10,
    error: false
  }
}

async function handleRefresh() {
  const value = { data: [], current: 1, error: false, finished: false }
  const loaders = {
    card: loadCard,
    rowCard: loadRowCard,
    plainCard: loadPlainCard
  }

  if (active.value === 'card') {
    card.value = value
  }

  if (active.value === 'rowCard') {
    rowCard.value = value
  }

  if (active.value === 'plainCard') {
    plainCard.value = value
  }

  await loaders[active.value as keyof typeof loaders]({ params: { current: 1 } })
  isRefresh.value = false
}

function handleClick() {
  router.push('/layout/home/detail')
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
          <var-tab name="card">{{ $t('Card List') }}</var-tab>
          <var-tab name="rowCard">{{ $t('Card List') }}</var-tab>
          <var-tab name="plainCard">{{ $t('Card List') }}</var-tab>
        </var-tabs>
      </template>
    </app-header>

    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <var-tabs-items v-model:active="active">
        <var-tab-item class="home-tab-item" name="card">
          <var-list
            :finished="card.finished"
            v-model:loading="isCardLoading"
            v-model:error="card.error"
            @load="() => loadCard({ params: { current: card.current } })"
          >
            <var-space class="home-tab-item-space" direction="column" size="large">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                src="@/assets/material-2.png"
                ripple
                v-for="i in card.data"
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
                    <var-button text type="primary" @touchstart.stop @click.stop>{{ $t('ACTION') }}</var-button>
                    <var-button text type="primary" @touchstart.stop @click.stop>{{ $t('ACTION') }}</var-button>
                  </var-space>
                </template>
              </var-card>
            </var-space>
          </var-list>
        </var-tab-item>
        <var-tab-item class="home-tab-item" name="rowCard">
          <var-list
            :finished="rowCard.finished"
            v-model:loading="isRowCardLoading"
            v-model:error="rowCard.error"
            @load="() => loadRowCard({ params: { current: rowCard.current } })"
          >
            <var-space class="home-tab-item-space" direction="column" size="large">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                src="@/assets/material-1.png"
                layout="row"
                ripple
                v-for="i in rowCard.data"
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
          </var-list>
        </var-tab-item>
        <var-tab-item class="home-tab-item" name="plainCard">
          <var-list
            :finished="plainCard.finished"
            v-model:loading="isPlainCardLoading"
            v-model:error="plainCard.error"
            @load="() => loadPlainCard({ params: { current: plainCard.current } })"
          >
            <var-space class="home-tab-item-space" direction="column" size="large">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                ripple
                v-for="i in plainCard.data"
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
          </var-list>
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
