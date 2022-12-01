<script lang="ts" setup>
import AuthApi from '@/apis/auth';
import { useAuthStore } from '@/store';

const loginParams = reactive({
  username: 'jocstech',
  password: '135246999',
});

const authStore = useAuthStore();

const onLogin = async () => {
  const { token } = await AuthApi.login(loginParams);
  if (token) {
    authStore.onLoginSuccess(token);
    uni.showToast({ title: '登陆成功', icon: 'success' });
  }
};
</script>

<template>
  <view class="">
    <uni-card title="登陆账户">
      <uni-forms :model-value="loginParams" label-position="top">
        <uni-forms-item label="账号" name="username">
          <uni-easyinput
            v-model="loginParams.username"
            type="text"
            placeholder="请输入账号"
          />
        </uni-forms-item>
        <uni-forms-item label="密码" name="password">
          <uni-easyinput
            v-model="loginParams.password"
            type="password"
            placeholder="请输入密码"
          />
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="onLogin">登陆</button>
    </uni-card>
    <uni-card title="登陆信息" class="p-5">
      <view v-if="authStore.getUser">
        {{ authStore.getUser }}
      </view>
      <view v-else>暂无登陆</view>
    </uni-card>
  </view>
</template>

<style scoped lang="scss"></style>
