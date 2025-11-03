<template >
<div class="flex flex-wrap gap-3">
         <div  v-for="card in cardType" :key="card.cardName" >
          <img
            :src="card.linkLogo"
            :alt="card.cardName"
            class="h-10 w-10 rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-100"
          />
         </div>

        </div>
        <aside class="mt-4 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
          <h3 class="mb-3 text-lg font-semibold text-slate-900">
            {{ instructionTitle }}
          </h3>

          <ul class="list-disc space-y-3 pl-5 text-slate-700">
            <li v-for="(step,index) in steps" :key="index">
              <span class="font-medium">Bước {{ index + 1 }}:</span>
              {{ step }}
            </li>
          </ul>
        </aside></template>
<script setup lang="ts">


const props = defineProps<{
  instructionTitle: string;
  steps: string[];
  cardType: {linkLogo:string, cardName:string}[];
}>();
console.log(props.cardType);

</script>
<style scoped>

</style>
