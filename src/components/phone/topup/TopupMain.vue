<template>
  <section class="px-4">
    <h2 class="mb-6 text-2xl font-semibold text-slate-900">Nhập thông tin</h2>
    <label class="mb-2 block text-sm font-medium text-slate-800">
      Số điện thoại cần thanh toán (*)
    </label>

    <div>
      <el-input
        v-model="input3"
        size="large"
        style="width: 100%"
        placeholder="Nhập số điện thoại"
        class="input-with-select"
      >
        <template #prepend>
          <el-icon><PhoneFilled /></el-icon>
        </template>

        <template #append>
          <el-select v-model="select" placeholder="Chọn nhà mạng" size="large" style="width: 180px">
            <!-- Hiển thị logo sau khi chọn -->
            <template #label>
              <div v-if="currentOption" class="flex items-center w-full h-full">
                <img :src="currentOption.icon" class="h-6 w-auto"  alt="nhà mạng"/>
              </div>
            </template>

            <el-option v-for="item in options" :key="item.value" :value="item.value">
              <div class="flex items-center space-x-2">
                <img :src="item.icon" class="w-6 h-6 rounded-full"  alt="nhà mạng"/>
                <span class="text-base capitalize">{{ item.label }}</span>
              </div>
            </el-option>
          </el-select>
        </template>
      </el-input>
    </div>

    <DenominationSelect :denominations="denominations" v-model="selectedDenomination" />

    <label class="mt-6 mb-2 block text-sm font-medium text-slate-800">Địa chỉ email (*)</label>
    <div class="relative flex rounded-lg border border-slate-200 bg-white">
      <input
        type="email"
        placeholder="Vui lòng nhập email"
        class="w-full rounded-lg bg-transparent px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none"
      />
    </div>
    <p class="mt-2 text-sm text-slate-500">
      Chúng tôi gửi kết quả thanh toán qua email bạn cung cấp
    </p>

    <button
      class="mt-6 w-full rounded-lg bg-blue-600 py-3 text-base font-semibold text-white hover:bg-blue-700 cursor-pointer"
    >
      Nạp ngay
    </button>

    <p class="mt-3 text-xs text-slate-500">
      Nhấn Nạp ngay đồng nghĩa với việc Quý khách đồng ý với chính sách và điều khoản
    </p>
  </section>
  <ModalBase></ModalBase>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import DenominationSelect from '../DenominationSelect.vue'
import { PhoneFilled } from '@element-plus/icons-vue'
import ModalBase from '@/components/modal/ModalBase.vue'

const input3 = ref('')       // số điện thoại
const select = ref<string>('') // value nhà mạng

// Danh sách nhà mạng + logo
const options = [
  { label: 'viettel',      value: 'viettel',      icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/viettel.svg' },
  { label: 'vinaphone',    value: 'vinaphone',    icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/vinaphone.svg' },
  { label: 'mobifone',     value: 'mobifone',     icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/mobifone.svg' },
  { label: 'vietnamobile', value: 'vietnamobile', icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/vietnamobile.svg' },
  { label: 'wintel',       value: 'wintel',       icon: 'https://scdn.zalopay.com.vn/zst/zpi/images/telco/logos_v2/wintel.svg' },
]

const currentOption = computed(() => options.find((item) => item.value === select.value))

// Bảng đầu số -> nhà mạng (3 số đầu)
const PREFIX_MAP: Record<string, string> = {
  // Viettel
  '086':'viettel','096':'viettel','097':'viettel','098':'viettel',
  '032':'viettel','033':'viettel','034':'viettel','035':'viettel',
  '036':'viettel','037':'viettel','038':'viettel','039':'viettel',
  // Vinaphone
  '088':'vinaphone','091':'vinaphone','094':'vinaphone',
  '081':'vinaphone','082':'vinaphone','083':'vinaphone','084':'vinaphone','085':'vinaphone',
  // Mobifone
  '089':'mobifone','090':'mobifone','093':'mobifone',
  '070':'mobifone','076':'mobifone','077':'mobifone','078':'mobifone','079':'mobifone',
  // Vietnamobile
  '092':'vietnamobile','056':'vietnamobile','058':'vietnamobile',
  // Wintel / iTelecom
  '087':'wintel',
  // Gmobile (nếu cần sau này)
  '099':'gmobile','059':'gmobile',
}

// Auto detect nhà mạng khi người dùng gõ số
watch(input3, (val) => {
  const digits = (val || '').replace(/\D/g, '')
  if (digits.length >= 3) {
    const prefix = digits.slice(0, 3)
    const telco = PREFIX_MAP[prefix]
    if (telco) select.value = telco
  }
})

const denominations = ref<number[]>([10000, 20000, 50000, 100000, 200000, 500000])
const selectedDenomination = ref<number | undefined>(denominations.value[0] ?? undefined)
</script>

<style scoped></style>
