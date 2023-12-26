<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();

import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import MusicPlayer from './components/MusicPlayer.vue';
</script>

<template>
  <Navbar />
  <Sidebar />
  <MusicPlayer />

  <main :class="{ 'pl-20': store.state.isMenu }">
    <router-view />
  </main>
</template>

<style scoped>
main {
  @apply pt-16 w-screen h-screen bg-zinc-950 text-white
}
</style>
