<template>
  <p class="mt-6 mb-2 text-sm font-medium text-slate-800">Chọn mệnh giá nạp</p>
  <div class="flex flex-wrap gap-4">
    <button
      v-for="denomination in denominations" :key="denomination"
      class="rounded-xl border  bg-white px-6 py-4 font-semibold text-slate-800 hover:border-blue-600 cursor-pointer transition-transform duration-100 hover:scale-105" :class="denomination === selectedDenomination ? ' border-blue-600' : 'border-slate-200'" @click="selectedDenomination = denomination??undefined"
    >
      {{formatCurrency(denomination)}}
    </button>
  </div>
</template>
<script setup lang="ts">
const {denominations} = defineProps<{
  denominations: number[];
}>();
const selectedDenomination = defineModel<number>()
const formatCurrency = (value: number): string => {
  return value.toLocaleString('vi-VN') + 'đ';
}
</script>
<style scoped></style>
