<script setup lang="ts">
const value = ref(false)
const sliderValue = ref(0)
</script>

<template>
  <router-stack>
    <var-style-provider class="pt-[var(--app-bar-height)]" :style-vars="{ '--cell-padding': '16px 12px' }">
      <app-header :title="$t('Settings')">
        <template #left>
          <app-back />
        </template>
      </app-header>

      <div class="py-[10px]">
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="mr-[20px] ml-[8px]" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="mr-[4px]" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="mr-[20px] ml-[8px]" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="mr-[4px]" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')" :description="$t('Setting Description')">
          <template #icon>
            <var-icon class="mr-[20px] ml-[8px]" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="mr-[4px]" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')" :description="$t('Setting Description')">
          <template #icon>
            <var-icon class="mr-[20px] ml-[8px]" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="mr-[4px]" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="mr-[20px] ml-[8px] mb-[10px]" size="6vmin" name="image" />
          </template>
          <template #description>
            <var-slider v-model="sliderValue" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="mr-[20px] ml-[8px] mb-[10px]" size="6vmin" name="image" />
          </template>
          <template #description>
            <var-slider v-model="sliderValue" />
          </template>
        </var-cell>
      </div>
    </var-style-provider>
  </router-stack>
</template>

<style lang="less" scoped>
.settings {
  &-slider-icon {
    margin-right: 20px;
    margin-left: 8px;
  }

  &-slider-icon {
    margin-bottom: 10px;
  }

  &-switch {
    margin-right: 4px;
  }
}
</style>
