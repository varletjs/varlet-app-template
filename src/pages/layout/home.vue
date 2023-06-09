<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)
const isRefresh = ref(false)
const items = ref()

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
  <app-header>
    <template #content>
      <var-tabs color="transparent" active-color="#fff" inactive-color="#ddd" v-model:active="active">
        <var-tab>Option A</var-tab>
        <var-tab>Option B</var-tab>
        <var-tab>Option C</var-tab>
      </var-tabs>
    </template>
  </app-header>

  <div class="home">
    <var-pull-refresh v-model="isRefresh" @refresh="refresh">
      <var-tabs-items ref="items" v-model:active="active">
        <var-tab-item class="home-tab-item">
          <var-space class="home-tab-item-space" direction="column" size="large">
            <var-card
              title="Dangerous"
              subtitle="The girl was dangerous"
              description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
              ripple
              v-for="_ in 5"
              :key="_"
              @click="handleClick"
            />
          </var-space>
        </var-tab-item>
        <var-tab-item class="home-tab-item">
          <var-space class="home-tab-item-space" direction="column" size="large">
            <var-card
              title="Dangerous"
              subtitle="The girl was dangerous"
              description="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
              src="https://varlet.gitee.io/varlet-ui/cat.jpg"
              ripple
              v-for="_ in 5"
              :key="_"
              @click="handleClick"
            >
              <template #extra>
                <var-space>
                  <var-button text type="warning">ACTION 1</var-button>
                  <var-button text type="warning">ACTION 2</var-button>
                </var-space>
              </template>
            </var-card>
          </var-space>
        </var-tab-item>
        <var-tab-item class="home-tab-item">
          <var-space class="home-tab-item-space" direction="column" size="large">
            <var-card
              title="Dangerous"
              subtitle="The way she came into the place I knew right then and there.There was something different about this girl.The way she moved her hair her face her lines.Divinity in motion as she stalked the room.I could feel the aura of her presence.Every head turned feeling passion and lust.The girl was persuasive the girl I could not trust.The girl was bad.The girl was dangerous."
              src="https://varlet.gitee.io/varlet-ui/cat.jpg"
              layout="row"
              ripple
              v-for="_ in 10"
              :key="_"
              @click="handleClick"
            >
              <template #extra>
                <var-button text round>
                  <var-icon name="star" />
                </var-button>
                <var-button round text>
                  <var-icon name="heart" />
                </var-button>
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
  padding-top: 44px;

  &-tab-item {
    min-height: calc(100vh - 190px);
  }

  &-tab-item-space {
    padding: 0 2px;
  }
}
</style>
