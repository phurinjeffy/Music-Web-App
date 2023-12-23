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

    <div v-if="currentTrack" class="flex w-fit min-w-[420px] gap-4 items-center">
      <div class="w-11 h-11 rounded-sm overflow-hidden">
        <img :src="currentTrack.cover" :alt="currentTrack.albumName" class="w-full h-full object-cover" />
      </div>

      <div class="flex flex-col justify-center flex-grow">
        <a href="" class="text-base font-normal w-fit hover:underline">{{ currentTrack.name }}</a>
        <p class="text-base font-light text-zinc-400">
          <span><a href="" class="hover:underline">{{ currentTrack.album }}</a></span> •
          <span><a href="" class="hover:underline">{{ currentTrack.artist }}</a></span>
        </p>
      </div>
    </div>

    <div class="mr-6 flex items-center">
      <input type="range" class="mr-4 accent-white w-24 h-1 cursor-pointer" min="0" max="100" v-model="currentVolume"
        @input="updateVolume" />
      <button @click="toggleVolume">
        <img :src="isMute ? 'src/assets/mute.svg' : 'src/assets/volume.svg'" class="w-6" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';

const isPlaying = ref(false);
const isMute = ref(false);
const volume = ref(100);

const store = useStore();

const currentVolume = computed({
  get: () => (isMute.value ? 0 : volume.value),
  set: (value: number) => {
    volume.value = value;
  },
});

const currentTrack = computed(() => store.state.activeMusic.music);

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

const toggleVolume = () => {
  isMute.value = !isMute.value;
};

const updateVolume = (event: any) => {
  volume.value = parseInt(event.target.value);
};

onMounted(() => {
  const initialMusic = store.state.musics[0];
  store.commit('setActiveMusic', initialMusic);
  console.log(currentTrack)
});
</script>

<style scoped></style>