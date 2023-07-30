<script setup lang="ts">
const account = reactive({
  username: '',
  password: '',
  email: '',
  confirmPassword: ''
})

const isViewPassword = ref(false)
const isViewConfirmPassword = ref(false)
</script>

<template>
  <router-stack>
    <div class="sign-up">
      <app-header title="SignUp">
        <template #left>
          <app-back />
        </template>
      </app-header>

      <var-form class="sign-up-form">
        <var-space direction="column" :size="['8vmin', 0]">
          <var-input variant="outlined" placeholder="请输入用户名" v-model="account.username">
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="account-circle" />
            </template>
          </var-input>
          <var-input variant="outlined" placeholder="请输入邮箱" v-model="account.email">
            <template #prepend-icon>
              <var-icon class="sign-up-form-input-icon" name="account-circle" />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            placeholder="请输入密码"
            :type="isViewPassword ? 'text' : 'password'"
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
            placeholder="请再次输入密码"
            :type="isViewConfirmPassword ? 'text' : 'password'"
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

          <var-button type="primary" block size="large">注册</var-button>
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
