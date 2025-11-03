<template >
  <PhoneNav v-model="currentComponentName"></PhoneNav>
  <component :is="componentMap[currentComponentName]"></component>
</template>
<script setup lang="ts">
import PhoneCardSection from '@/components/phone/phoneCard/PhoneCardSection.vue';
import PhoneNav from '@/components/phone/PhoneNav.vue';
import TopupSection from '@/components/phone/topup/TopupSection.vue';
import { PhoneType } from '@/types/phoneType';
import type { Component } from 'vue'
import { ref } from 'vue';
const currentComponentName = ref<PhoneType>(PhoneType.TopupSection);
const componentMap: Record<string, Component> = {
  TopupSection: TopupSection,
  PhoneCardSection: PhoneCardSection
}
</script>
<style scoped>

</style>
