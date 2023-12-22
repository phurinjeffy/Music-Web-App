<template>
  <div class="flex flex-col h-screen w-20 bg-zinc-950 text-white fixed py-20">
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <img :src="menuItem.image" alt="Menu Icon" class="w-8 h-8 my-2" />
        {{ menuItem.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { label: 'Home', image: '../assets/home.svg' },
  { label: 'Explore', image: '../assets/explore.svg' },
  { label: 'Library', image: '../assets/library.svg' },
];
</script>

<style scoped>

</style>