<script lang="ts" setup>
import MomentsApi from '@/apis/moments';
import { useAuthStore } from '@/store';
const authStore = useAuthStore();

const moments = ref();

onShow(async () => {
  if (authStore.getAuthToken) {
    moments.value = await MomentsApi.getMoments();
    console.log(moments.value);
  }
});
</script>

<template>
  <view class="article">
    <text class="text-2xl">Moments</text>
    <view v-if="moments" class="p-5">
      {{ moments }}
    </view>
  </view>
</template>

<style scoped></style>
