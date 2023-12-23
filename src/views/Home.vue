<template>
  <main>
    <ul class="flex flex-col justify-center items-start my-12" ref="musicList">
      <li v-for="(music, index) in getMusics" :key="index" :class="checkActiveMusic(music.index) ? 'bg-zinc-900' : ''"
        @click="selectMusic(music); updateMusicListScroll($event);" :ref="checkActiveMusic(music.index) ? 'activeMusic' : ''"
        class="flex flex-row w-fit my-2 items-center justify-center mx-auto p-2">
        <img :src="music.cover" class="w-16 h-16 mr-5" />
        <span class="w-96">{{ music.name }}</span>
        <span class="w-96">{{ music.artist }}</span>
        <span class="w-96">{{ music.album }}</span>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import globalMixins from "../mixins/globalMixins";
import musicsMixins from "../mixins/musicsMixins";
export default {
  name: "Home",
  mixins: [globalMixins, musicsMixins],
};
</script>

<style scoped></style>