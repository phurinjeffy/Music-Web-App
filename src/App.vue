<script setup lang="ts">
import MusicPlayer from './components/MusicPlayer.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Navbar />
  <Sidebar />
  <main>
    <MusicPlayer />
  </main>
</template>

<style scoped>
</style>
