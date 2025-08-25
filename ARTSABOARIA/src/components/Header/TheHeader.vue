<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, provide } from 'vue';
import '../Header/styles/TheHeader.css';
import '../Header/styles/TheHeaderResponsive.css';

const menuAtivo = ref(false);


const toggleMenu = () => {
  menuAtivo.value = !menuAtivo.value;
};

const returnMenu = () => {
  menuAtivo.value = false;
};
provide('menuAtivo', menuAtivo);

</script>

<template>
    <header 
      :class="{ nav: menuAtivo }">
      <div id="logo">
          <img src="../Header/Icons/bubble icon.png" alt="" id="logo_icon">
          <img src="../Header/Image/LogoTexto.svg" alt="" id="logo_text">
      </div>
  
      <div id="menu_button">
        <button id="hamburguer" @click="toggleMenu"></button>
      </div>
  
      <div class="categoria">
        <nav>
          <RouterLink to="/" @click="returnMenu">Ínicio</RouterLink>
          <RouterLink to="/galeria" @click="returnMenu">Galeria</RouterLink>
          <RouterLink to="/contato" @click="returnMenu">Contatos</RouterLink>
          <RouterLink to="/orientacoes" @click="returnMenu">Orientações</RouterLink>
          <RouterLink to="/perfil" @click="returnMenu">Perfil</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </template>
  