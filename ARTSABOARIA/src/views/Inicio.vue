<script setup lang="ts">
import MainLaddingPage from '../components/main_inicio/MainLaddingPage.vue';

// Recebe o estado global do menu
defineProps(['menuAtivo']);
</script>

<template>
  <main v-if="!menuAtivo">
    <MainLaddingPage />
  </main>
</template>
