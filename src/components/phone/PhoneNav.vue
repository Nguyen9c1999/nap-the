<script setup lang="ts">
import type { PhoneType } from '@/types/phoneType';
import { ref } from 'vue'
type Tab = { key: string; label: string }
const currentComponentName = defineModel<PhoneType>()
const tabs = ref<Tab[]>([
  { key: 'TopupSection', label: 'Nạp tiền ĐT' },
  { key: 'PhoneCardSection', label: 'Mua thẻ ĐT' },
  { key: 'postpaid', label: 'ĐT trả sau' },
  { key: 'data-topup', label: 'Nạp Data' },
  { key: 'combo-data', label: 'Combo Data' },
  { key: 'data-card', label: 'Thẻ data' },
  { key: 'gplay', label: 'Mã thẻ Google Play' },
])

const active = ref('TopupSection')
const isActive = (k: string) => active.value === k
const changeTab = (t: Tab) => {
  active.value = t.key
  currentComponentName.value = t.key as PhoneType
}
</script>

<template>
  <div class="w-full  py-6">
    <nav class="mx-auto max-w-6xl">
      <ul class="flex items-center justify-center gap-10 text-[15px] font-medium text-slate-800">
        <li v-for="t in tabs" :key="t.key">
          <button
            @click="changeTab(t)"
            class="hover:text-blue-700 focus:outline-none cursor-pointer"
            :class="isActive(t.key)
              ? 'inline-flex items-center rounded-full border border-blue-500/60 px-5 py-2 text-blue-600 shadow-sm bg-white'
              : ''">
            <span :class="isActive(t.key) ? '' : ''">{{ t.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
