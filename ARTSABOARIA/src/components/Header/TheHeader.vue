<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import '../Header/TheHeader.css'
</script>

<template>
    <header>
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
        <div >
            <RouterLink to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" id="perfil">
            </RouterLink>
        </div>
    </header>
  <RouterView />
</template>