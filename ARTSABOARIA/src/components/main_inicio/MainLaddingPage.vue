<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main>
        <div id="text">
            <h1>Quem nós <span>somos</span>?</h1>
            <h3>Nós somos uma pequena empresa familiar, fundada recentemente em <span>Búzios-RJ</span> com o intuito de gerar não somente renda mas também movimentar a economia local, gerar empregos e encorajar as pessoas a serem quem elas realmente são, aceitando a si mesmas como elas realmente são, e incentivando-as a cuidarem de si <span>mesmas</span>.</h3>
        </div>
        <div id="interaction">
            <RouterLink to="/galeria">
                <button>GALERIA</button>
            </RouterLink>
        </div>
    </main>
    <RouterView />
</template>
