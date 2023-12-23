<template>
  <div class="flex flex-col h-screen w-20 bg-zinc-950 text-white fixed py-20 items-center text-center border-[0.5px] border-gray-500 border-opacity-50">
    <router-link to="/" class="text-xs mb-6 cursor-pointer">
      <img src="/src/assets/home.svg" alt="Home" class="w-5 h-5 m-2" />
      Home
    </router-link>

    <router-link to="/explore" class="text-xs mb-6 cursor-pointer">
      <img src="/src/assets/explore.svg" alt="Explore" class="w-5 h-5 m-2" />
      Explore
    </router-link>

    <router-link to="/library" class="text-xs mb-6 cursor-pointer">
      <img src="/src/assets/library.svg" alt="Library" class="w-5 h-5 m-2" />
      Library
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
