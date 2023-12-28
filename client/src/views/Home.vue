<template>
  <div class="p-8">
    <div class="flex flex-row gap-5 ml-2 items-center">
      <img src="../assets/musics/1975.jpeg" class="rounded-full w-16 h-16" />
      <div class="flex flex-col justify-start items-start">
        <div class="text-zinc-400 text-base font-normal uppercase">
          Jeff
        </div>
        <button
          type="button"
          class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
          Listen Again
        </button>
      </div>
    </div>

    <div class="py-1.5"></div>

    <div class="flex items-center overflow-x-scroll scrollbar-hidden">
      <HomeCard v-for="item in items" :key="item.title" 
        :image="item.image" 
        :title="item.title" 
        :subtitle="item.subtitle" 
      />
    </div>
  </div>

  <div class="p-8">
    <div class="flex flex-row gap-5 ml-2 items-center">
      <img src="../assets/musics/sample.jpeg" class="rounded-full w-16 h-16" />
      <div class="flex flex-col justify-start items-start">
        <div class="text-zinc-400 text-base font-normal uppercase">
          Similar To
        </div>
        <button
          type="button"
          class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
          DEPT
        </button>
      </div>
    </div>

    <div class="py-1.5"></div>

    <div class="flex items-center overflow-x-scroll">
      <HomeCard v-for="item in items" :key="item.title" 
        :image="item.image" 
        :title="item.title" 
        :subtitle="item.subtitle" 
      />
    </div>
  </div>

  <div class="p-8">
    <div class="flex flex-row gap-5 ml-2 items-center">
      <img src="../assets/musics/1975.jpeg" class="rounded-full w-16 h-16" />
      <div class="flex flex-col justify-start items-start">
        <div class="text-zinc-400 text-base font-normal uppercase">
          Similar To
        </div>
        <button
          type="button"
          class="text-white text-2xl font-semibold hover:underline cursor-pointer"
        >
          LANDOKMAI
        </button>
      </div>
    </div>

    <div class="py-1.5"></div>

    <div class="flex items-center overflow-x-scroll">
      <HomeCard v-for="item in items" :key="item.title" 
        :image="item.image" 
        :title="item.title" 
        :subtitle="item.subtitle" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeCard from '../components/HomeCard.vue';

const items = [
  { image: "src/assets/musics/sample.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/sample.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/sample.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
  { image: "src/assets/musics/1975.jpeg", title: "Hello", subtitle: "World" },
];
</script>

<style scoped>

</style>