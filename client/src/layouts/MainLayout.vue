<template>
  <div>
    <Navbar />
    <Sidebar />

    <main :class="{ 'pl-20': store.state.isMenu }"
      class="pt-16 w-screen max-h-[calc(100vh-5rem)] bg-zinc-950 text-white overflow-y-auto">
      <router-view :code="$route.query.code"/>
    </main>

    <MusicPlayer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import MusicPlayer from '../components/MusicPlayer.vue';

import { useStore } from 'vuex';
const store = useStore();
</script>

<style scoped></style>