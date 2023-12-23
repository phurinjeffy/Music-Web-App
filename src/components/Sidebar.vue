<template>
  <aside class="flex flex-col h-screen w-20 bg-zinc-950 text-white fixed py-20 items-center text-center border-[0.5px] border-gray-500 border-opacity-50">
    <router-link v-for="menuItem in MENU_ITEMS" :key="menuItem.label" :to="menuItem.route" class="text-[11px] font-light mb-3 cursor-pointer">
      <img :src="menuItem.image" :alt="menuItem.label" class="w-5 h-5 mx-auto my-2" />
      {{ menuItem.label }}
    </router-link>
  </aside>
</template>

<script setup lang="ts">
import { MENU_ITEMS } from '../constants';
</script>

<style scoped></style>
