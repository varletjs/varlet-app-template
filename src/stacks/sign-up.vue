<script setup lang="ts">
import { Form } from '@varlet/ui'
import { z } from 'zod'

const { t } = useI18n()
const form = ref<Form>()
const isViewPassword = ref(false)
const isViewConfirmPassword = ref(false)
const account = reactive({
  username: '',
  password: '',
  confirmPassword: '',
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
    <div class="sign-up">
      <app-header :title="$t('Sign Up')">
        <template #left>
          <app-back />
        </template>
      </app-header>

      <var-form ref="form" class="sign-up-form">
        <var-space direction="column" :size="['8vmin', 0]">
          <var-input
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('username') })"
            :rules="z.string().min(1, $t('Value cannot be empty'))"
            v-model="account.username"
          >
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="account-circle" />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('password') })"
            :type="isViewPassword ? 'text' : 'password'"
            :rules="z.string().min(1, $t('Value cannot be empty'))"
            v-model="account.password"
          >
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="lock" />
            </template>
            <template #append-icon>
              <var-icon
                class="sign-up-form-input-icon"
                :name="isViewPassword ? 'view' : 'view-outline'"
                @click="isViewPassword = !isViewPassword"
              />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('confirm password') })"
            :type="isViewConfirmPassword ? 'text' : 'password'"
            :rules="[
              z.string().min(1, $t('Value cannot be empty')),
              (v) => v === account.password || $t('Not match the password')
            ]"
            v-model="account.confirmPassword"
          >
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="lock" />
            </template>
            <template #append-icon>
              <var-icon
                class="sign-up-form-input-icon"
                :name="isViewConfirmPassword ? 'view' : 'view-outline'"
                @click="isViewConfirmPassword = !isViewConfirmPassword"
              />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('email') })"
            :rules="z.string().email($t('Email format error'))"
            v-model="account.email"
          >
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="email" />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            :placeholder="$t('Please input {field}', { field: $t('verify code') })"
            :rules="z.string().min(6, $t('Length must be {length}', { length: 6 }))"
            v-model="account.verifyCode"
          >
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="card-account-details" />
            </template>
          </var-input>

          <var-button type="primary" block size="large" auto-loading @click="submit">{{ $t('Sign Up') }}</var-button>
        </var-space>
      </var-form>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(80px + var(--app-bar-height)) 0 60px;

  &-form {
    width: 280px;
    margin-top: 20px;

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
