<template>
  <section
    class="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
    role="status"
    aria-live="polite"
  >
    <div class="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-2xl bg-slate-50">
      <!-- icon -->
      <svg viewBox="0 0 24 24" class="w-8 h-8">
        <path
          d="M3 13h2l1.5 6h11L19 13h2M5 13l4-9h6l4 9M9 13v4M15 13v4"
          fill="none" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </div>

    <div class="inline-flex items-center gap-2">
      <h2 class="text-xl font-semibold text-slate-900">{{ title }}</h2>
      <span v-if="betaTag" class="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">Beta</span>
    </div>

    <p class="mt-2 text-slate-600" v-if="description">{{ description }}</p>
    <p v-if="eta" class="mt-1 text-sm text-slate-500">Dự kiến: <strong class="text-slate-700">{{ eta }}</strong></p>

    <div class="mt-5 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        class="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
        @click="$emit('back')"
      >
        Quay lại
      </button>

      <button
        v-if="allowNotify"
        type="button"
        class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        @click="$emit('notify')"
      >
        Báo tôi khi ra mắt
      </button>

      <a
        v-if="docLink"
        :href="docLink"
        target="_blank"
        rel="noopener"
        class="rounded-lg px-4 py-2 text-blue-700 underline hover:no-underline"
      >
        Xem tài liệu/roadmap
      </a>
    </div>

    <!-- slot tuỳ biến thêm nội dung -->
    <div v-if="$slots.default" class="mt-6">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  eta?: string
  docLink?: string
  allowNotify?: boolean
  betaTag?: boolean
}>()

defineEmits<{
  (e: 'back'): void
  (e: 'notify'): void
}>()
</script>
