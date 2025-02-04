<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import '../main_inicio/styles/MainLaddingPage.css';
    import '../main_inicio/styles/MainLaddingPageResponsive.css';
    import { inject } from 'vue';
    const menuAtivo = inject('menuAtivo');
</script>

<template>
    <transition name="fade" v-if="!menuAtivo">
        <div id="container_LaddingPage">
            <main>
                <section v-scroll-reveal="{delay: 200, duration: 1000, distance: '150px', origin: 'left'}">
                    <div id="text">
                        <div id="title">
                            <h1>Quem nós <span>somos</span>?</h1>
                        </div>
                        <h3>Somos uma empresa familiar, recém-fundada em <span>Búzios-RJ</span>, com o objetivo de te incentivar a ser quem você realmente é. Acreditamos que o autocuidado e o bem-estar são essenciais para a sua conexão interior. Oferecemos produtos feitos com carinho, voltado para te fazer sentir único e especial.</h3>
                    </div>
                    <div id="interaction">
                        <RouterLink to="/galeria">
                            <button>GALERIA</button>
                        </RouterLink>
                    </div>
                </section>
                <aside v-scroll-reveal="{delay: 200, duration: 1000, distance: '150px', origin: 'right'}">
                    <img id="card-image" src="https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </aside>
            </main>
        </div>
    </transition>
        <RouterView />
</template> 
