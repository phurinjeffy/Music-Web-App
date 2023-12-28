<template>
  <RouterLink to="library">
    <div class="p-4 rounded-md m-2 cursor-pointer bg-zinc-900 hover:bg-zinc-800">
      <img class="rounded-md min-w-48 min-h-48 w-48 h-48" :src="image"/>
      <div class="text-white pt-4 font-semibold text-lg">
        {{ title }}
      </div>
      <div class="text-gray-400 pt-1 pb-3 text-sm">
        {{ subtitle }}
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  image: String,
  title: String,
  subtitle: String,
})

const { image, title, subtitle } = toRefs(props);
</script>