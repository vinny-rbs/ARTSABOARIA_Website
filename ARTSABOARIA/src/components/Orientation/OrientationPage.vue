<script setup lang="ts">
    import './styles/OrientationPage.css';
    import './styles/OrientationPageResponsive.css';
    import { inject } from 'vue';
    const menuAtivo = inject('menuAtivo');
</script>

<template>
    <transition name="fade" v-if="!menuAtivo">
        <div id="container_OrientationPage" >
            <main>
                <article v-scroll-reveal="{delay: 200, duration: 1000, distance: '150px', origin: 'left', scale: 1.2}">
                    <div class="titles">
                        <h1>Como posso fazer o descarte consiente dos meus <span>sabonetes</span>.</h1>
                    </div>
                    <div id="description">
                        <p>Uma iniciativa da <span>ARTSABOARIA LTDA</span>, com o proposito de diminuir o descarte incorreto dos sabonetes que provoca danos para o meio ambiente</p>
                    </div>
                    <div id="info_bottom_OrientationPage">
                        <div class="titles">
                            <h1>Formas devidas</h1>
                        </div>
                        <ol start="1">
                            <li>Escolher sabonetes naturais</li>
                            <li>Evitar a poluição da água</li>
                            <li>Utilize recipientes adequados</li>
                            <li>Promover a reciclagem</li>
                            <li>Evite embalagens desnecessárias</li>
                        </ol>
                    </div>
                </article>
                <aside v-scroll-reveal="{delay: 200, duration: 1000, distance: '150px', origin: 'right', scale: 1.2}">
                    <img src="../../assets/images/Imagem ilustrativa.svg" alt="" id="person_orientation">
                </aside>
            </main>
        </div>
    </transition>
</template>