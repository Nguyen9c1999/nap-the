<template >
 <section class="flex justify-center">
    <div class="w-[65%] grid grid-cols-3 gap-2">
      <div class="col-span-2 py-10">
        <PhoneCardMain></PhoneCardMain>
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
import PhoneCardMain from './PhoneCardMain.vue';
const instructionTitle = 'Cách mua thẻ điện thoại trên website Zalopay'
const steps = [
  'Chọn nhà cung cấp',
  'Bấm chọn “mệnh giá nạp”, chọn gói Flash Sale (khuyến mãi) nếu có',
  'Chọn số lượng thẻ (được phép mua tối đa 5 thẻ mỗi lần)',
  'Nhập địa chỉ email để Zalopay gửi thông tin thẻ',
  'Bấm chọn “Mua ngay” để thanh toán và hoàn tất giao dịch',
]
const cardType = [{linkLogo:'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos/viettel.svg', cardName:'Viettel'},]

</script>
<style scoped>

</style>

