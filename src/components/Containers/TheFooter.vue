<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center border-t-2 pt-6" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <router-link :to="item.href" class="text-base text-gray-500 hover:text-gray-900">
            {{ item.name }}
          </router-link>
        </div>
      </nav>
      <img 
        class="w-20 h-20 mx-auto mt-5"
        src="https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png" 
        alt="">
      <p class="mt-1 text-center text-base text-gray-400">&copy; 2022 Payment Security, Inc. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'Home', href: '/home' },
    { name: 'My Carts', href: '/payment-list' },
    { name: 'Add Cart', href: '/add-payment' },
  ],
}
</script>