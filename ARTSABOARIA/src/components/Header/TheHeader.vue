<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, provide } from 'vue';
import '../Header/styles/TheHeader.css';
import '../Header/styles/TheHeaderResponsive.css';
import { createScrollRevealDirective } from 'vue-scroll-reveal';

// Criando a diretiva para scroll reveal
const vScrollReveal = createScrollRevealDirective({
  delay: 1000,
  duration: 150,
});

// Variável global
const menuAtivo = ref(false);

// Método para alternar o estado do menu
const toggleMenu = () => {
  menuAtivo.value = !menuAtivo.value;
};
provide('menuAtivo', menuAtivo);

</script>

<template>
    <header 
      v-scroll-reveal="{origin: 'top', delay: 1000, duration: 1000, distance: '150px'}" 
      :class="{ nav: menuAtivo }">
      <div id="logo">
        <RouterLink to="/">
          <img src="../Header/Icons/bubble icon.png" alt="" id="logo_icon">
          <img src="../Header/Image/LogoTexto.svg" alt="" id="logo_text">
        </RouterLink>
      </div>
  
      <div id="menu_button">
        <!-- Botão hamburguer -->
        <button id="hamburguer" @click="toggleMenu"></button>
      </div>
  
      <div class="categoria">
        <!-- Navegação com classe ativa no menu -->
        <nav>
          <RouterLink to="/">Ínicio</RouterLink>
          <RouterLink to="/galeria">Galeria</RouterLink>
          <RouterLink to="/contato">Contatos</RouterLink>
          <RouterLink to="/orientacoes">Orientações</RouterLink>
          <RouterLink to="/a">Perfil</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </template>
  