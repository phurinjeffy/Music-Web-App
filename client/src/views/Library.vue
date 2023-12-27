<template>
  <div class="mx-6">
    <ul class="flex flex-col justify-center items-start my-12" ref="musicList">
      <li v-for="(music, index) in getMusics" :key="index"
        class="flex flex-row w-full items-center justify-center mx-auto p-3"
        @click="setActiveMusic(music)"
        :class="{ 'bg-zinc-900': isActiveTrack(music) }"
        >

        <img :src="music.cover" class="w-16 h-16 mr-5" />
        <span class="w-96 text-white">{{ music.name }}</span>
        <span class="w-96 text-zinc-400">{{ music.artist }}</span>
        <span class="w-96 text-zinc-400">{{ music.album }}</span>

      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { Music } from 'src/store';

const store = useStore();

const getMusics = store.getters.getMusics;

const setActiveMusic = (music: Music) => {
  store.commit('setActiveMusic', music);
  store.commit('setAudioSource', music.file);
};

const isActiveTrack = (music: Music) => {
  const activeMusic = store.getters.getActiveMusic;
  return activeMusic.index === music.index;
};

</script>

<style scoped></style>