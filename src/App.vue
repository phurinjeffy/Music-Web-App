<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import MusicPlayer from './components/MusicPlayer.vue';
</script>

<template>
  <Navbar />
  <Sidebar />
  <MusicPlayer />

  <router-view />
</template>

<style scoped>
main {
  @apply pt-16 pl-20 w-screen h-screen bg-zinc-950 text-white
}
</style>
