<template>
  <div
    class="bottom-0 flex flex-row justify-between items-center w-full h-20 px-4 fixed z-10 bg-zinc-800 text-white border-[0.5px] border-gray-500 border-opacity-50">
    <div class="flex items-center gap-8 ml-1">
      <button>
        <img src="../assets/prev.svg" class="w-4" />
      </button>
      <button v-if="!isPlaying">
        <img src="../assets/pause.svg" class="w-6" />
      </button>
      <button v-else>
        <img src="../assets/play.svg" class="w-6" />
      </button>
      <button>
        <img src="../assets/next.svg" class="w-4" />
      </button>
    </div>

    <div v-if="currentTrack" class="flex w-fit min-w-[420px] gap-5">
      <div class="w-12 h-12 rounded-md overflow-hidden">
        <img :src="currentTrack.albumCover" :alt="currentTrack.albumName" class="w-full h-full object-cover" />
      </div>

      <div class="flex flex-col justify-center flex-grow">
        <p class="text-sm font-semibold">{{ currentTrack.songName }}</p>
        <p class="text-xs text-gray-500">{{ currentTrack.albumName }} • {{ currentTrack.artistName }}</p>
      </div>
    </div>

    <div class="mr-6 flex items-center">
      <input
        type="range"
        class="mr-4 accent-white w-24 h-1 cursor-pointer"
        min="0" max="100"
        v-model="volume"
        @input="updateVolume"
      />
      <button @click="toggleVolume">
        <img
          src="../assets/volume.svg"
          class="w-6"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isPlaying = false;
let volume = 100;

const toggleVolume = () => {
  volume = volume === 0 ? 50 : 0;
};

const updateVolume = (event: any) => {
  volume = parseInt(event.target.value);
};

const music = [
  {
    albumCover: 'src/assets/sample.jpeg',
    songName: 'Song Name 1',
    albumName: 'Album Name 1',
    artistName: 'Artist Name 1',
  },
  {
    albumCover: 'src/assets/sample.jpeg',
    songName: 'Song Name 2',
    albumName: 'Album Name 2',
    artistName: 'Artist Name 2',
  },
];

const currentTrack = music[0];
</script>

<style scoped>

</style>