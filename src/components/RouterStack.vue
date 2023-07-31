<script setup lang="ts">
import { Context } from '@varlet/ui'
import { useParent, useChildren } from '@varlet/use'
import { watch, ref, nextTick } from 'vue'

Context.zIndex++

defineProps({
  keepAlive: {
    type: Boolean,
    default: true
  },
  animation: {
    type: String
  }
})

defineEmits(['push', 'pushed', 'pop', 'popped'])

const stack = ref<HTMLElement>()
const showParent = ref(true)
const zIndex = ref(Context.zIndex)
const { length, bindChildren } = useChildren<any, any>('__ROUTER_STACK__')
const { bindParent } = useParent<any, any>('__ROUTER_STACK__')

bindChildren({})
bindParent?.({})

const savedPosition = { top: 0, left: 0 }

function restoreParent() {
  setTimeout(async () => {
    showParent.value = true
    await nextTick()
    stack.value?.scrollTo(savedPosition)
  }, 250)
}

function saveParent() {
  showParent.value = false
  savedPosition.top = stack.value!.scrollTop
  savedPosition.left = stack.value!.scrollLeft
}

watch(
  () => length.value,
  async (value) => {
    value === 0 ? restoreParent() : saveParent()
  }
)
</script>

<template>
  <div class="router-stack" ref="stack" :style="{ zIndex }">
    <keep-alive v-if="keepAlive">
      <div v-if="showParent">
        <slot />
      </div>
    </keep-alive>
    <div v-show="showParent" v-else>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  color: var(--color-text);
  background-color: var(--color-body);

  &-parent {
    padding-top: 54px;
  }
}
</style>
