<script setup lang="ts">
const account = reactive({
  username: '',
  password: ''
})

const isViewPassword = ref(false)
</script>

<template>
  <router-stack>
    <div class="sign-in">
      <app-header title="SignIn">
        <template #left>
          <app-back />
        </template>
      </app-header>

      <var-image src="@/assets/images/logo.svg" width="24vmin" height="24vmin" />

      <var-form class="sign-in-form">
        <var-space direction="column" :size="['8vmin', 0]">
          <var-input variant="outlined" placeholder="请输入用户名" v-model="account.username">
            <template #prepend-icon>
              <var-icon class="sign-in-form-input-icon" name="account-circle" />
            </template>
          </var-input>
          <var-input
            variant="outlined"
            placeholder="请输入密码"
            :type="isViewPassword ? 'text' : 'password'"
            v-model="account.password"
          >
            <template #prepend-icon>
              <var-icon class="sign-in-form-input-icon" name="lock" />
            </template>
            <template #append-icon>
              <var-icon
                class="sign-in-form-input-icon"
                :name="isViewPassword ? 'view' : 'view-outline'"
                @click="isViewPassword = !isViewPassword"
              />
            </template>
          </var-input>

          <var-space class="sign-in-form-text" justify="space-between" align="center">
            <var-checkbox>记住密码</var-checkbox>
            <span>忘记密码?</span>
          </var-space>
          <var-button type="primary" block size="large">登录</var-button>
          <var-space class="sign-in-form-text" justify="center" @click="$router.push(`${$route.path}/sign-up`)"
            >还没有账号？点击注册</var-space
          >
        </var-space>
      </var-form>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.sign-in {
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
