<script setup lang="ts">
import { ref } from 'vue'
import { apiGetItems, apiGetPlainItems, apiGetRowItems, Item } from '@/apis'
import { UseAxleRefs } from '@varlet/axle/use'

const { pushStack } = useAppRouter()
const active = ref('list')
const isRefresh = ref(false)

export interface List {
  items: Item[]
  current: number
  finished: boolean
  error: boolean
}

const [list, getItems, { loading: isItemsLoading }] = apiGetItems.use<List>({
  value: {
    items: [],
    current: 1,
    error: false,
    finished: false
  },
  onTransform,
  onError
})

const [plainList, getPlainItems, { loading: isPlainItemsLoading }] = apiGetPlainItems.use<List>({
  value: {
    items: [],
    current: 1,
    error: false,
    finished: false
  },
  onTransform,
  onError
})

const [rowList, getRowItems, { loading: isRowItemsLoading }] = apiGetRowItems.use<List>({
  value: {
    items: [],
    current: 1,
    error: false,
    finished: false
  },
  onTransform,
  onError
})

function onTransform(response: Res<Item[]>, { value }: UseAxleRefs<List>) {
  if (response.code !== 200) {
    return {
      ...value.value,
      finished: false,
      error: true
    }
  }

  return {
    items: [...value.value.items, ...response.data],
    current: value.value.current + 1,
    finished: response.data.length < 10,
    error: false
  }
}

function onError(error: Error, { value }: UseAxleRefs<List>) {
  value.value.error = true
}

async function handleRefresh() {
  const value = { items: [], current: 1, error: false, finished: false }
  const loaders = {
    list: getItems,
    rowList: getRowItems,
    plainList: getPlainItems
  }

  if (active.value === 'list') {
    list.value = value
  }

  if (active.value === 'rowList') {
    rowList.value = value
  }

  if (active.value === 'plainList') {
    plainList.value = value
  }

  await loaders[active.value as keyof typeof loaders]({ params: { current: 1 } })
  isRefresh.value = false
}

function handleClick() {
  pushStack('/detail')
}
</script>

<template>
  <div class="pt-[114px] pb-[16px] px-[14px]">
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
          <var-tab name="list">{{ $t('Card List') }}</var-tab>
          <var-tab name="rowList">{{ $t('Card List') }}</var-tab>
          <var-tab name="plainList">{{ $t('Card List') }}</var-tab>
        </var-tabs>
      </template>
    </app-header>

    <var-pull-refresh v-model="isRefresh" @refresh="handleRefresh">
      <var-tabs-items v-model:active="active">
        <var-tab-item class="min-h-[calc(var(--app-height)-190px)]" name="list">
          <var-list
            :finished="list.finished"
            v-model:loading="isItemsLoading"
            v-model:error="list.error"
            @load="() => getItems({ params: { current: list.current } })"
          >
            <var-space class="p-[4px]" direction="column" :size="['5vmin', 0]">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                src="@/assets/images/material-2.png"
                ripple
                v-for="i in list.items"
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
        <var-tab-item class="min-h-[calc(var(--app-height)-190px)]" name="rowList">
          <var-list
            :finished="rowList.finished"
            v-model:loading="isRowItemsLoading"
            v-model:error="rowList.error"
            @load="() => getRowItems({ params: { current: rowList.current } })"
          >
            <var-space class="p-[4px]" direction="column" :size="['5vmin', 0]">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                src="@/assets/images/material-1.png"
                layout="row"
                ripple
                v-for="i in rowList.items"
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
        <var-tab-item class="min-h-[calc(var(--app-height)-190px)]" name="plainList">
          <var-list
            :finished="plainList.finished"
            v-model:loading="isPlainItemsLoading"
            v-model:error="plainList.error"
            @load="() => getPlainItems({ params: { current: plainList.current } })"
          >
            <var-space class="p-[4px]" direction="column" :size="['5vmin', 0]">
              <var-card
                :title="$t('Card Title')"
                :subtitle="$t('Card Subtitle')"
                ripple
                v-for="i in plainList.items"
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

<route lang="json">
{
  "meta": {
    "stacks": [
      "detail",
      "sign-up",
      "settings",
      {
        "name": "sign-in",
        "children": ["sign-up", "forgot-password"]
      }
    ]
  }
}
</route>
