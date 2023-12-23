<template>
  <div
    class="bottom-0 flex flex-row justify-between items-center w-full h-20 px-4 fixed z-10 bg-zinc-800 text-white border-[0.5px] border-gray-500 border-opacity-50">
    <div class="flex items-center gap-8 ml-1">
      <button>
        <img src="../assets/prev.svg" class="w-4" />
      </button>
      <button @click="togglePlay">
        <img :src="isPlaying ? 'src/assets/pause.svg' : 'src/assets/play.svg'" class="w-6" />
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
        <a href="" class="text-sm font-semibold w-fit hover:underline">{{ currentTrack.songName }}</a>
        <p class="text-xs text-gray-500">
          <span><a href="" class="hover:underline">{{ currentTrack.albumName }}</a></span> •
          <span><a href="" class="hover:underline">{{ currentTrack.artistName }}</a></span>
        </p>
      </div>
    </div>

    <div class="mr-6 flex items-center">
      <input type="range" class="mr-4 accent-white w-24 h-1 cursor-pointer" min="0" max="100" v-model="currentVolume"
        @input="updateVolume" />
      <button @click="toggleVolume">
        <img src="../assets/volume.svg" class="w-6" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isPlaying: false,
      isMute: false,
      volume: 100,
      music: [
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
      ],
      currentTrack: null as null | {
        albumCover: string;
        songName: string;
        albumName: string;
        artistName: string;
      },
    };
  },
  computed: {
    currentVolume: {
      get() {
        return this.isMute ? 0 : this.volume;
      },
      set(value: number) {
        this.volume = value;
      },
    },
  },
  methods: {
    togglePlay() {
      this.isPlaying = !this.isPlaying;
    },
    toggleVolume() {
      this.isMute = !this.isMute;
    },
    updateVolume(event: any) {
      this.volume = parseInt(event.target.value);
    },
  },
  created() {
    this.currentTrack = this.music[0];
  },
};
</script>

<style scoped></style>