<template>
  <div
    class="bottom-0 flex flex-row justify-between items-center w-full h-20 px-4 fixed z-10 bg-zinc-800 text-white border-[0.5px] border-gray-500 border-opacity-50">
    <div class="flex items-center gap-5 md:gap-8 ml-2">
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

    <div v-if="currentTrack" class="flex w-fit g:min-w-[420px] gap-4 items-center mx-4">
      <div class="w-11 h-11 rounded-sm hidden md:block">
        <img :src="currentTrack.cover" :alt="currentTrack.albumName" class="w-full h-full object-cover" />
      </div>

      <div class="flex flex-col justify-center">
        <a href="" class="text-sm md:text-base font-normal w-fit hover:underline">{{ currentTrack.name }}</a>
        <p class="text-sm md:text-base font-light text-zinc-400 truncate">
          <span><a href="" class="hover:underline">{{ currentTrack.album }}</a></span> •
          <span><a href="" class="hover:underline">{{ currentTrack.artist }}</a></span>
        </p>
      </div>
    </div>

    <div class="mr-6 flex items-center group" @mouseover="showVolume = true" @mouseleave="showVolume = false">
      <input type="range" class="mr-4 accent-white w-24 h-1 cursor-pointer hidden lg:block group-hover:block" min="0"
        max="100" v-model="currentVolume" @input="updateVolume" />
      <button @click="toggleVolume">
        <img :src="isMute ? 'src/assets/mute.svg' : 'src/assets/volume.svg'" class="w-6" />
      </button>
    </div>

    <audio ref="audioRef"></audio>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';

const store = useStore();

const isMute = ref(false);
const volume = ref(100);
const showVolume = ref(false);

const currentVolume = computed({
  get: () => (isMute.value ? 0 : volume.value),
  set: (value: number) => {
    volume.value = value;
    updatePlayerVolume(value);
  },
});

const toggleVolume = () => {
  isMute.value = !isMute.value;
  updatePlayerVolume(currentVolume.value);
};

const updateVolume = (event: any) => {
  volume.value = parseInt(event.target.value);
};

const updatePlayerVolume = (value: number) => {
  if (audioRef.value) {
    audioRef.value.volume = value / 100;
  }
};

const currentTrack = computed(() => store.state.activeMusic.music);

const isPlaying = computed(() => store.state.isPlay);

const togglePlay = () => {
  store.commit('updatePlayStatus');
  isPlaying.value ? play() : pause();
};

onMounted(() => {
  const initialMusic = store.state.musics[0];
  store.commit('setActiveMusic', initialMusic);
  if (audioRef.value) {
    audioRef.value.src = initialMusic.file;
  }
});

const audioRef = ref<HTMLAudioElement | null>(null);

const play = () => {
  const audio = audioRef.value;
  if (audio && audio.src) {
    audio.play();
  }
};

const pause = () => {
  const audio = audioRef.value;
  if (audio) {
    audio.pause();
  }
};

</script>

<style scoped></style>