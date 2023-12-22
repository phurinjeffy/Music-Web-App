<template>
  <div class="flex flex-col h-screen w-20 bg-zinc-950 text-white fixed py-20 items-center text-center border-[0.5px] border-gray-500 border-opacity-50">
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index" class="text-xs mb-6">
        <img :src="menuItem.image" :alt="menuItem.label" class="w-5 h-5 m-2" />
        {{ menuItem.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { label: 'Home', image: '/src/assets/home.svg' },
  { label: 'Explore', image: '/src/assets/explore.svg' },
  { label: 'Library', image: '/src/assets/library.svg' },
];
</script>

<style scoped></style>
