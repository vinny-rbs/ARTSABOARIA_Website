<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import '../Header/TheHeader.css'
</script>

<template>
    <header>
        <div id="logo">
            <a href="/">
                <img src="../Header/Icons/bubble icon.png" alt="" id="logo_icon">
                <img src="../Header/Image/LogoTexto.svg" alt="" id="logo_text">
            </a>
        </div>
        <div class="categoria">
            <nav>
                <RouterLink to="/">Ínicio</RouterLink>
                <RouterLink to="/galeria">Galeria</RouterLink>
                <RouterLink to="/contato">Contatos</RouterLink>
                <RouterLink to="/orientacoes">Orientações</RouterLink>
            </nav>
        </div>
    </header>
  <RouterView />
</template>
