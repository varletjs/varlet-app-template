<script setup lang="ts">
import { validateEmail, validateLength } from '@/utils/validate'
import { Form } from '@varlet/ui'

const { t } = useI18n()
const form = ref<Form>()
const account = reactive({
  email: '',
  verifyCode: ''
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
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('email') })"
            :rules="[validateEmail()]"
            v-model="account.email"
          >
            <template #prepend-icon>
              <var-icon class="forgot-password-form-input-icon" name="email" />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('verify code') })"
            :rules="[validateLength(6)]"
            v-model="account.verifyCode"
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
