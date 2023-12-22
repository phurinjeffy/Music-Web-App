<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import Home from './components/Home.vue';
</script>

<template>
  <header>
    <Navbar />
    <Sidebar />
    <MusicPlayer />
  </header>
  <main>
    <Home />
  </main>
</template>

<style scoped>
main {
  @apply pt-16 pl-20 w-screen h-screen bg-zinc-900
}
</style>
