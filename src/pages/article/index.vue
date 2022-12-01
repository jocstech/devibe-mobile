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

<template>
  <view v-if="article" class="article">
    <view class="px-2">
      <uni-title type="h1" :title="article.title" />
    </view>
    <cover-view>
      <cover-image :src="article.cover" />
    </cover-view>

    <view class="px-2 bg-gray-100 font-italic">
      <text>{{ article.subtitle }}</text>
    </view>

    <view class="px-2 pt-6">
      <rich-text :nodes="article.content" />
    </view>
  </view>
</template>

<style scoped></style>
