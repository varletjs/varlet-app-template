<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<{ animation?: 'slide-x' | 'slide-y' }>(), {
  animation: 'slide-x'
})

const emit = defineEmits<{ push: []; pushed: []; pop: [path: string]; popped: [path: string] }>()
const { route } = useAppRouter()

// When the router-stack-view is deactivated in keep-alive, it will still be matched by vue-router and may render the child route view multiple times.
// So unmount the component when it is deactivated.
const activated = ref(true)
const pushedPath = ref()

onDeactivated(() => {
  activated.value = false
})

onActivated(() => {
  activated.value = true
})

function handlePush() {
  pushedPath.value = route.path
  emit('push')
}
</script>

<template>
  <teleport to="body" v-if="activated">
    <router-view v-slot="{ Component }">
      <transition
        :name="`router-stack-view-${animation}`"
        @before-enter="handlePush"
        @after-enter="$emit('pushed')"
        @before-leave="$emit('pop', pushedPath)"
        @after-leave="$emit('popped', pushedPath)"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </teleport>
</template>

<style>
.router-stack-view-slide-x-enter-active,
.router-stack-view-slide-x-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.router-stack-view-slide-x-enter-from,
.router-stack-view-slide-x-leave-to {
  opacity: 0;
  transform: translateX(20%);
}

.router-stack-view-slide-y-enter-active,
.router-stack-view-slide-y-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.router-stack-view-slide-y-enter-from,
.router-stack-view-slide-y-leave-to {
  opacity: 0;
  transform: translateY(54px);
}
</style>
