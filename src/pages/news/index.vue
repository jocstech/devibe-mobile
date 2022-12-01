<script lang="ts" setup>
const news = ref();
uni.request({
  url: 'https://api.devibe.cn/v1/articles/list',
  success: ({ data }) => {
    news.value = (data as any).data;
  },
});
</script>

<template>
  <view class="article">
    <uni-list>
      <uni-list-item
        v-for="n in news"
        :key="n._id"
        :to="`/pages/article/index?id=${n._id}`"
      >
        <!-- 左侧封面 -->
        <template #header>
          <view>
            <image
              :src="n.cover"
              class="w-30 h-25 rounded-sm"
              mode="aspectFill"
            />
          </view>
        </template>
        <!-- 标题文字 -->
        <template #body>
          <view class="flex flex-col pl-2">
            <text class="text-sm font-semibold text-black pb-1">
              {{ n.title }}
            </text>
            <text
              class="text-xs text-true-gray-700 pb-1 flex-auto overflow-hidden"
            >
              {{ n.subtitle }}
            </text>
            <view class="flex flex-row justify-between text-true-gray-600">
              <view class="flex place-items-center">
                <uni-icons type="person-filled" size="14" />
                <text class="text-xs">{{ n.author.name }}</text>
              </view>
              <view class="flex place-items-center">
                <uni-icons type="info" size="14" />
                <text class="text-xs">
                  {{ new Date(n.created_at).toLocaleDateString() }}
                </text>
              </view>
            </view>
          </view>
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<style scoped></style>
