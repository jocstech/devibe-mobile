<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');
</script>

<template>
  <view class="content">
    <uni-nav-bar :title="title" />
    <uni-nav-bar title="导航栏组件2" />
    <uni-nav-bar title="导航栏组件3" />
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <uni-card
        title="基础卡片"
        sub-title="副标题"
        extra="额外信息"
        thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
      >
        <text>
          这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。
        </text>
      </uni-card>
    </view>
  </view>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
