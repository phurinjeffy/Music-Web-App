<template>
  <div class="flex flex-col h-screen w-20 bg-zinc-950 text-white fixed py-20 items-center text-center border-[0.5px] border-gray-500 border-opacity-50">
    <ul>
      <li class="text-xs mb-6">
        <img src="../assets/home.svg" :alt="menuItems[0].label" class="w-5 h-5 m-2" />
        {{ menuItems[0].label }}
      </li>
      <li class="text-xs mb-6">
        <img src="../assets/explore.svg" :alt="menuItems[1].label" class="w-5 h-5 m-2" />
        {{ menuItems[1].label }}
      </li>
      <li class="text-xs mb-6">
        <img src="../assets/library.svg" :alt="menuItems[2].label" class="w-5 h-5 m-2" />
        {{ menuItems[2].label }}
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

<style scoped></style>