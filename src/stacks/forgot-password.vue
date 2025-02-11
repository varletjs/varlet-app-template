<script setup lang="ts">
import { Form } from '@varlet/ui'
import { z } from 'zod'

const { t } = useI18n()
const form = ref<Form>()
const account = reactive({
  email: '',
  verifyCode: '',
})

async function submit() {
  const valid = await form.value?.validate()

  if (valid) {
    return new Promise((resolve) => {
      setTimeout(() => {
        Snackbar.success(t('Submit Success'))
        resolve(undefined)
      }, 1000)
    })
  }
}
</script>

<template>
  <router-stack>
    <div class="forgot-password">
      <app-header :title="$t('Forgot Password')">
        <template #left>
          <app-back />
        </template>
      </app-header>

      <var-form ref="form" class="forgot-password-form">
        <var-space direction="column" :size="['8vmin', 0]">
          <var-input
            v-model="account.email"
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('email') })"
            :rules="z.string().email($t('Email format error'))"
          >
            <template #prepend-icon>
              <var-icon class="forgot-password-form-input-icon" name="email" />
            </template>
          </var-input>
          <var-input
            v-model="account.verifyCode"
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('verify code') })"
            :rules="z.string().min(6, $t('Length must be {length}', { length: 6 }))"
          >
            <template #prepend-icon>
              <var-icon class="forgot-password-form-input-icon" name="card-account-details" />
            </template>
          </var-input>
          <var-button type="primary" block size="large" auto-loading @click="submit">{{ $t('Submit') }}</var-button>
        </var-space>
      </var-form>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.forgot-password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(80px + var(--app-bar-height)) 0 60px;

  &-form {
    width: 280px;
    margin-top: 50px;

    &-input-icon {
      margin-right: 10px;
      font-size: 24px;
    }

    &-text {
      font-size: 14px;
      color: var(--color-primary);
    }
  }
}
</style>
