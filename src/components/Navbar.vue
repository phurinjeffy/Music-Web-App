<template>
  <div
    class="flex flex-row justify-between items-center w-full h-16 px-4 fixed z-10 bg-zinc-950 text-white border-[0.5px] border-gray-300 border-opacity-30">
    <div class="flex items-center gap-6 ml-3">
      <div class="cursor-pointer w-fit" @click="menuClick">
        <div class="w-[18px] h-[1.1px] bg-white my-[5px]"></div>
        <div class="w-[18px] h-[1.1px] bg-white my-[5px]"></div>
        <div class="w-[18px] h-[1.1px] bg-white my-[5px]"></div>
      </div>

      <a>
        <img src="../assets/youtube_music.png" class="w-28" />
      </a>

      <div class="flex w-full min-w-[420px] bg-zinc-800 rounded-lg border-[0.5px] border-gray-300 border-opacity-30">
        <img src="../assets/search.svg" class="w-5 mx-4"/>
        <input type="text"
          class="w-full mr-6 bg-zinc-800 text-[#9e9e9e] font-light p-2 focus:outline-none placeholder-current"
          placeholder="Search songs, albums, artists, podcasts" />
      </div>
    </div>

    <div class="mr-8">
      <a>
        <img src="../assets/profile.svg" class="w-8" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuClick = () => {

};
</script>

<style scoped>

</style>