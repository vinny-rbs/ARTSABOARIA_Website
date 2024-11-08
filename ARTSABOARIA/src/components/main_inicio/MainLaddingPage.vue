<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import '../main_inicio/MainLaddingPage.css'
</script>

<template>
    <div id="container_LaddingPage">
        <main>
            <section>
                <div id="text">
                    <h1>Quem nós <span>somos</span>?</h1><br>
                    <h3>Nós somos uma pequena empresa familiar, fundada recentemente em <span>Búzios-RJ</span> com o intuito de gerar não somente renda mas também movimentar a economia local, gerar empregos e encorajar as pessoas a serem quem elas realmente são, aceitando a si mesmas como elas realmente são, e incentivando-as a cuidarem de si <span>mesmas</span>.</h3>
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
    </div>
    <RouterView />
</template>
