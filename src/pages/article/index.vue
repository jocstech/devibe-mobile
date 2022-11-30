<template>
  <view class="article" v-if="article">
    <uni-title type="h1" :title="article.title"></uni-title>
    <cover-view>
      <cover-image :src="article.cover"></cover-image>
    </cover-view>
    <view>
      <rich-text :nodes="article.content"></rich-text>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';

  const article = ref();

  const fetch = (id: string) => {
    uni.request({
      url: `https://api.devibe.cn/v1/articles/${id}`,
      success: ({ data }) => {
        article.value = (data as any).data;
      },
    });
  };

  onLoad((option) => {
    if (option?.id) fetch(option.id);
  });
</script>

<style scoped></style>
