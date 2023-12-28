<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="flex justify-center items-center bg-green-500 rounded-md w-48 h-16">
      <a :href="AUTH_URL">
        Login with Spotify
      </a>
    </div>  
  </div>
</template>

<script setup lang="ts">
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=eecd535d69bc42339419202f5f851fdd&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

</script>

<style scoped></style>