<script setup lang="ts">
import TheHeader from './components/Header/TheHeader.vue'
import { ref } from "vue";
const menuAtivo = ref(false);
</script>

<template>
  <TheHeader :menuAtivo.sync="menuAtivo"/>
</template>