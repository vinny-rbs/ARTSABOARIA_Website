<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import '../Header/TheHeader.css'

    import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
        const vScrollReveal = createScrollRevealDirective({
        delay: 1000,
        duration: 150,
    });

</script>

<template>
    <header v-scroll-reveal="{origin: 'top', reset: false, delay: 1000, duration: 1000, distance: '150px',}">
        <div id="logo">
            <RouterLink to="/">
                <img src="../Header/Icons/bubble icon.png" alt="" id="logo_icon">
                <img src="../Header/Image/LogoTexto.svg" alt="" id="logo_text">
            </RouterLink>
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