<script setup lang="ts">
import Login from './views/Login.vue';

const code = new URLSearchParams(window.location.search).get('code')
</script>

<template>
  <router-view v-if="code" /> 
  <Login v-else />
</template>
 