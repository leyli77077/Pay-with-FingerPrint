<template>
  <div class="text-center text-black">
    <TheHeader/>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 my-5">
      <router-view></router-view>
    </div>
    <TheFooter/>
  </div>
</template>

<script setup>
import TheHeader from '../../components/Containers/TheHeader.vue';
import TheFooter from '../../components/Containers/TheFooter.vue';
</script>