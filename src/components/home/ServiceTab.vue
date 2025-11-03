<template>
  <section class="bg-[#F5F9FF] flex justify-center pt-15">
    <div >
      <h1 class="text-[20px] font-semibold">Thanh toán mọi dịch vụ bạn yêu thích</h1>
      <div class="mt-8 flex justify-center ">
        <div v-for="(service,index) in services" :key="index" class="w-[110px] h-24  p-[16px] flex flex-col items-center gap-2  cursor-pointer" :class="index === currentTab ? activeTabClass : ''" @click="changeTab(index,service.nameRouter)">
          <img :src="service?.icon" alt="icon-dien-thoai" />
          <span class="font-semibold">{{ service?.name}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Service } from '@/types/services';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const services = ref<Service[]>([
  { name: 'Điện thoại', icon: 'https://simg.zalopay.com.vn/zlp-website/assets/dien_thoai_bc79df40da.svg', nameRouter: 'HomePhone' },
  { name: 'Tài chính', icon: 'https://simg.zalopay.com.vn/zlp-website/assets/tai_chinh_ff13f4ff81.svg', nameRouter: 'HomeFinance' },
  { name: 'Hóa đơn', icon: 'https://simg.zalopay.com.vn/zlp-website/assets/hoa_don_2dad5b0bb1.svg', nameRouter: 'HomeBill' },
])
const currentTab = ref<number>(0);
const activeTabClass = ref<string>('bg-white rounded-t-lg inset-shadow-xs text-[#0033c9]');
const changeTab = (index: number, nameRouter: string) => {
  currentTab.value = index;
  router.push({name:nameRouter});
};

</script>
