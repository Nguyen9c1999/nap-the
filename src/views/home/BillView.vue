<template >
  <div class="py-8">
    <FeatureWip
  title="Tính năng đang phát triển"
  description="Chúng tôi đang hoàn thiện trải nghiệm tốt nhất cho bạn."
  eta="Tháng 12/2025"
  :allowNotify="true"
  :betaTag="true"
  @back="$router.back()"
/>
  </div>

</template>
<script setup lang="ts">
import FeatureWip from '@/components/FeatureWip.vue';


</script>
<style scoped>

</style>

