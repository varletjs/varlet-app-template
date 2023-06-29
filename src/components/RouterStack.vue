<script setup lang="ts">
import { Context } from '@varlet/ui'
import { useParent, useChildren } from '@varlet/use'
import { watch, ref, nextTick } from 'vue'

defineProps({
  keepAlive: {
    type: Boolean,
    default: true
  },
  animation: {
    type: String
  }
})

const stack = ref<HTMLElement>()
const showParent = ref(true)
const { length, bindChildren } = useChildren<any, any>('__ROUTER_STACK__')
const { bindParent } = useParent<any, any>('__ROUTER_STACK__')

bindChildren({})
bindParent?.({})

const savedPosition = { top: 0, left: 0 }

watch(
  () => length.value,
  async (value) => {
    const shouldShowParent = value === 0

    if (shouldShowParent) {
      setTimeout(async () => {
        showParent.value = shouldShowParent
        await nextTick()
        stack.value?.scrollTo(savedPosition)
      }, 250)
    } else {
      showParent.value = shouldShowParent
      savedPosition.top = stack.value!.scrollTop
      savedPosition.left = stack.value!.scrollLeft
    }
  }
)

Context.zIndex += 1
</script>

<template>
  <div class="router-stack" ref="stack" :style="{ zIndex: Context.zIndex }">
    <app-header />

    <keep-alive v-if="keepAlive">
      <div class="router-stack-parent" v-if="showParent">
        <slot />
      </div>
    </keep-alive>
    <div class="router-stack-parent" v-show="showParent" v-else>
      <slot />
    </div>

    <router-stack-view
      :animation="animation"
      @push="$emit('push')"
      @pushed="$emit('pushed')"
      @pop="$emit('pop')"
      @popped="$emit('popped')"
    />
  </div>
</template>

<style lang="less" scoped>
.router-stack {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  color: var(--color-text);
  background-color: var(--color-body);

  &-parent {
    padding-top: 54px;
  }
}
</style>
