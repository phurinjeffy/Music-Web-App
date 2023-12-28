<template>
  <div
    class="flex flex-row justify-between items-center w-full h-16 px-4 fixed z-10 bg-zinc-950 text-white border-[0.5px] border-gray-500 border-opacity-50">
    <div class="flex items-center gap-6 ml-3">
      <div class="cursor-pointer w-fit" @click="toggleMenu">
        <div class="w-[18px] h-[1.1px] bg-white my-[5px]"></div>
        <div class="w-[18px] h-[1.1px] bg-white my-[5px]"></div>
        <div class="w-[18px] h-[1.1px] bg-white my-[5px]"></div>
      </div>

      <router-link to="/">
        <img src="../assets/youtube_music.png" class="w-24" />
      </router-link>
    </div>

    <div class="mr-6">
      <router-link to="/login">
        <img src="../assets/profile.svg" class="w-8" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

const toggleMenu = () => store.commit('toggleMenu');

</script>

<style scoped>

</style>