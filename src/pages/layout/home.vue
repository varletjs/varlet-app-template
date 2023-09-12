<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGetCards, useGetPlainCards, useGetRowCards, Card } from '@/apis/card'
import { Response } from '@/apis/types'
import { UseAxleRefs } from '@varlet/axle/use'

interface CardList {
  cards: Card[]
  current: number
  finished: boolean
  error: boolean
}

const router = useRouter()
const active = ref('card')
const isRefresh = ref(false)

const [cardList, getCards, { loading: isCardsLoading }] = useGetCards<CardList>({
  value: {
    cards: [],
    current: 1,
    error: false,
    finished: false
  },
  onTransform,
  onError
})

const [plainCardList, getPlainCards, { loading: isPlainCardsLoading }] = useGetPlainCards<CardList>({
  value: {
    cards: [],
    current: 1,
    error: false,
    finished: false
  },
  onTransform,
  onError
})

const [rowCardList, getRowCards, { loading: isRowCardsLoading }] = useGetRowCards<CardList>({
  value: {
    cards: [],
    current: 1,
    error: false,
    finished: false
  },
  onTransform,
  onError
})

function onTransform(response: Response<Card[]>, { value }: UseAxleRefs<CardList>) {
  if (response.code !== 200) {
    return {
      ...value.value,
      finished: false,
      error: true
    }
  }

  return {
    cards: [...value.value.cards, ...response.data],
    current: value.value.current + 1,
    finished: response.data.length < 10,
    error: false
  }
}

function onError(error: Error, { value }: UseAxleRefs<CardList>) {
  value.value.error = true
}

async function handleRefresh() {
  const value = { cards: [], current: 1, error: false, finished: false }
  const loaders = {
    card: getCards,
    rowCard: getRowCards,
    plainCard: getPlainCards
  }

  if (active.value === 'card') {
    cardList.value = value
  }

  if (active.value === 'rowCard') {
    rowCardList.value = value
  }

  if (active.value === 'plainCard') {
    plainCardList.value = value
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
            :finished="cardList.finished"
            v-model:loading="isCardsLoading"
            v-model:error="cardList.error"
            @load="() => getCards({ params: { current: cardList.current } })"
          >
            <var-space class="home-tab-item-space" direction="column" size="large">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                src="@/assets/images/material-2.png"
                ripple
                v-for="i in cardList.cards"
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
            :finished="rowCardList.finished"
            v-model:loading="isRowCardsLoading"
            v-model:error="rowCardList.error"
            @load="() => getRowCards({ params: { current: rowCardList.current } })"
          >
            <var-space class="home-tab-item-space" direction="column" size="large">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                src="@/assets/images/material-1.png"
                layout="row"
                ripple
                v-for="i in rowCardList.cards"
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
            :finished="plainCardList.finished"
            v-model:loading="isPlainCardsLoading"
            v-model:error="plainCardList.error"
            @load="() => getPlainCards({ params: { current: plainCardList.current } })"
          >
            <var-space class="home-tab-item-space" direction="column" size="large">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                ripple
                v-for="i in plainCardList.cards"
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

  <router-stack-view />
</template>

<style lang="less" scoped>
.home {
  --home-header-height: 98px;
  padding: calc(var(--home-header-height) + 16px) 14px 16px;

  &-tab-item {
    min-height: calc(var(--app-height) - 190px);
  }

  &-tab-item-space {
    padding: 4px;
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
          name: 'detail'
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
