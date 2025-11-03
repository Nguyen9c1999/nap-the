<template>
  <section class="px-4">
    <h2 class="mb-6 text-2xl font-semibold text-slate-900">Nhập thông tin</h2>

    <!-- Chọn nhà cung cấp -->
    <div>
      <label class="mb-2 block text-sm font-medium text-slate-800">Chọn nhà cung cấp</label>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="o in telcos"
          :key="o.value"
          type="button"
          @click="selectedTelco = o.value"
          class="flex h-14 min-w-[120px] items-center justify-center gap-2 rounded-xl border bg-white px-4
                 transition hover:border-blue-500"
          :class="selectedTelco===o.value
            ? 'border-blue-600 ring-2 ring-blue-100'
            : 'border-slate-200'"
        >
          <img :src="o.icon" alt="" class="h-6 w-auto" />
        </button>
      </div>
    </div>
    <!-- Chọn mệnh giá -->
    <DenominationSelect
      :denominations="denominations"
      v-model="selectedDenomination"
    />

    <!-- Số lượng -->
    <div class="mt-6 rounded-xl border border-slate-200 bg-slate-50">
      <div class="flex items-center justify-between px-4 py-3">
        <span class="text-sm font-medium text-slate-800">Số lượng</span>
        <div class="flex items-center gap-4">
          <button
            type="button"
            class="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-white
                   disabled:opacity-40"
            :disabled="qty<=1"
            @click="qty--"
            aria-label="Giảm"
          >−</button>
          <span class="min-w-[1.5rem] text-center text-base font-semibold">{{ qty }}</span>
          <button
            type="button"
            class="grid h-8 w-8 place-items-center rounded-full border border-slate-300 bg-white"
            @click="qty++"
            aria-label="Tăng"
          >+</button>
        </div>
      </div>
    </div>

    <!-- Email -->
    <label class="mt-6 mb-2 block text-sm font-medium text-slate-800">Địa chỉ email (*)</label>
    <div class="relative flex rounded-lg border border-slate-200 bg-white">
      <input
        v-model="email"
        type="email"
        placeholder="Vui lòng nhập email"
        class="w-full rounded-lg bg-transparent px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
      />
    </div>
    <p class="mt-2 text-sm text-slate-500">
      Chúng tôi gửi kết quả thanh toán qua email bạn cung cấp
    </p>

    <!-- Tổng tiền -->
    <div class="mt-4 flex items-center justify-between">
      <span class="text-sm text-slate-600">Tổng tiền</span>
      <strong class="text-xl text-slate-900">{{ formatVnd(total) }}</strong>
    </div>

    <!-- Nút hành động -->
    <button
      class="mt-6 w-full rounded-lg bg-blue-600 py-3 text-base font-semibold text-white hover:bg-blue-700 cursor-pointer"
    >
      Nạp ngay
    </button>

    <p class="mt-3 text-xs text-slate-500">
      Nhấn Nạp ngay đồng nghĩa với việc Quý khách đồng ý với chính sách và điều khoản
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DenominationSelect from '../DenominationSelect.vue'
const email = ref('')

const telcos = [
  { label: 'viettel',      value: 'viettel',      icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/viettel.svg' },
  { label: 'mobifone',     value: 'mobifone',     icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/mobifone.svg' },
  { label: 'vinaphone',    value: 'vinaphone',    icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/vinaphone.svg' },
  { label: 'vietnamobile', value: 'vietnamobile', icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/vietnamobile.svg' },
  { label: 'wintel',       value: 'wintel',       icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/wintel.svg' },
]
const selectedTelco = ref<string>('viettel')
const denominations = ref<number[]>([10000, 20000, 50000, 100000, 200000, 500000])
const selectedDenomination = ref<number | null>(denominations.value[2]??null) // 50.000đ mặc định
const qty = ref(1)
const total = computed(() => (selectedDenomination.value || 0) * qty.value)
const formatVnd = (n:number) =>
  new Intl.NumberFormat('vi-VN').format(n) + 'đ'
</script>
