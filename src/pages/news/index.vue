<template>
  <view class="article">
    <uni-list>
      <uni-list-item
        v-for="n in news"
        :key="n._id"
        :title="n.title"
        :note="n.subtitle"
        :thumb="n.cover"
        thumb-size="lg"
        ellipsis="1"
        :rightText="n.author.name"
        :to="`/pages/article/index?id=${n._id}`"
      >
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // const { setPageConfig, showNotify } = usePageStore()

  const news = ref();
  uni.request({
    url: 'https://api.devibe.cn/v1/articles',
    success: ({ data }) => {
      news.value = (data as any).data;
    },
  });
</script>

<style scoped></style>
