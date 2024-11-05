<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import '../main_inicio/MainLaddingPage.css'
</script>

<template>
    <main>
        <section>
            <div id="text">
                <h1>Quem nós <b>somos</b>?</h1><br>
                <h3>Nós somos uma pequena empresa familiar, fundada recentemente em <b>Búzios-RJ</b> com o intuito de gerar não somente renda mas também movimentar a economia local, gerar empregos e encorajar as pessoas a serem quem elas realmente são, aceitando a si mesmas como elas realmente são, e incentivando-as a cuidarem de si <b>mesmas</b>.</h3>
            </div>
            <div id="interaction">
                <RouterLink to="/galeria">
                    <button>GALERIA</button>
                </RouterLink>
            </div>
        </section>
        <aside>
            <img id="card-image" src="https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        </aside>
    </main>
    <RouterView />
</template>
