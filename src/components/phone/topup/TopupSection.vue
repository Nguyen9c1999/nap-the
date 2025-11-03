<template>
  <section class="flex justify-center">
    <div class="w-[65%] grid grid-cols-3 gap-2">
      <div class="col-span-2 py-10">
        <TopupMain></TopupMain>
      </div>
      <div class="py-10">
        <DepositInstructions
          :instructionTitle="instructionTitle"
          :steps="steps"
          :cardType="cardType"
        ></DepositInstructions>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DepositInstructions from '../DepositInstructions.vue';
import TopupMain from './TopupMain.vue';

const instructionTitle = 'Hướng dẫn nạp tiền điện thoại trên website Zalopay'
const steps = [
  'Nhập số điện thoại cần nạp',
  'Bấm chọn “mệnh giá nạp”, chọn gói Flash Sale (khuyến mãi) nếu có',
  'Nhập địa chỉ email của bạn, chúng tôi gửi kết quả thanh toán qua email bạn cung cấp',
  'Bấm chọn “Nạp ngay” để thanh toán và hoàn tất giao dịch',
]
const cardType = [{linkLogo:'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos/viettel.svg', cardName:'Viettel'},]
</script>

<style scoped></style>
