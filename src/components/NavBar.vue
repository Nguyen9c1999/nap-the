<template>
  <nav class="bg-white flex justify-center py-8">
    <div class="">
      <ul class="flex space-x-8 text-gray-700 font-semibold">
        <li>
          <router-link
            to="/"
            class="relative py-4 hover:text-blue-600"
            exact-active-class="text-blue-600"
          >
            Trang chủ
          </router-link>
        </li>
        <li>
          <router-link to="/news" class="py-4 hover:text-blue-600" active-class="text-blue-600">
            Tin tức
          </router-link>
        </li>
        <li>
          <router-link to="/services" class="py-4 hover:text-blue-600" active-class="text-blue-600">
            Dịch vụ
          </router-link>
        </li>
        <li>
          <router-link to="/partners" class="py-4 hover:text-blue-600" active-class="text-blue-600">
            Đối tác
          </router-link>
        </li>
        <li>
          <router-link to="/support" class="py-4 hover:text-blue-600" active-class="text-blue-600">
            Trợ giúp
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="py-4 hover:text-blue-600" active-class="text-blue-600">
            Về ZaloPay
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
/* logic ở đây (Vue 3 - <script setup>) */
</script>

<style scoped>

</style>
