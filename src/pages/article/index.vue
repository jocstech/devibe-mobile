<script lang="ts" setup>
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
    <!-- 文章标签 -->
    <view v-if="article.tags" class="pt-2 px-2">
      <uni-tag
        v-for="tag in article.tags"
        :key="tag._id"
        class="pr-1"
        :text="tag.name"
        type="error"
        size="mini"
      />
    </view>
    <!-- 文章标题 -->
    <view class="px-2">
      <uni-title type="h1" :title="article.title" />
    </view>
    <!-- 文章封面 -->
    <cover-view>
      <cover-image :src="article.cover" />
    </cover-view>
    <!-- 副标题 -->
    <view class="px-4 py-2 bg-gray-100">
      <text class="text-xs text-true-gray-600 font-normal italic">
        {{ article.subtitle }}
      </text>
    </view>
    <!-- 作者时间信息 -->
    <view class="text-center p-2">
      <text class="text-xs font-light">作者: {{ article.author.name }}</text>
      <text class="text-xs font-light">
        发布时间: {{ new Date(article.created_at).toLocaleDateString() }}
      </text>
    </view>
    <!-- 文章内容 -->
    <view class="px-3 py-5">
      <rich-text :nodes="article.content" class="leading-8" />
    </view>
  </view>
</template>

<style scoped></style>
