<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div id="logo">
            <img src="../assets/img/icons/LogoIcone.svg" alt="">
        </div>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/galeria">Galeria</RouterLink>
            </nav>
        </div>
    </header>
  <RouterView />
</template>