<script setup lang="ts">
const value = ref(false)
const sliderValue = ref(0)
</script>

<template>
  <router-stack>
    <div class="settings">
      <app-header :title="$t('Settings')">
        <template #left>
          <app-back />
        </template>
      </app-header>

      <div class="settings-list">
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="settings-icon" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="settings-switch" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="settings-icon" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="settings-switch" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')" :description="$t('Setting Description')">
          <template #icon>
            <var-icon class="settings-icon" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="settings-switch" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')" :description="$t('Setting Description')">
          <template #icon>
            <var-icon class="settings-icon" size="6vmin" name="image" />
          </template>
          <template #extra>
            <var-switch class="settings-switch" size="5.2vmin" v-model="value" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="settings-slider-icon" size="6vmin" name="image" />
          </template>
          <template #description>
            <var-slider v-model="sliderValue" />
          </template>
        </var-cell>
        <var-cell :title="$t('Setting Name')">
          <template #icon>
            <var-icon class="settings-slider-icon" size="6vmin" name="image" />
          </template>
          <template #description>
            <var-slider v-model="sliderValue" />
          </template>
        </var-cell>
      </div>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.settings {
  --cell-padding: 16px 12px;
  padding: var(--app-bar-height) 0 0;

  &-list {
    padding: 10px 0;
  }

  &-icon,
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
