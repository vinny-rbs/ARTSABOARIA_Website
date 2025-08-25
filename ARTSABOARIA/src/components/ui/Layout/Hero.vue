<script setup>
    import DefaultButtons from '../Buttons/DefaultButtons.vue';
    import WelcomeCard from '../Cards/WelcomeCard.vue';
</script>

<template>
    <div id="container_LaddingPage">
        <WelcomeCard />
        <section>
            <h1>Quem nós somos?</h1>
            <!-- <div id="text">
                <div id="title">
                    <h1>Quem nós <span>somos</span>?</h1>
                </div>
                <h3>Somos uma empresa familiar, recém-fundada em <span>Búzios-RJ</span>, com o objetivo de te incentivar a ser quem você realmente é. Acreditamos que o autocuidado e o bem-estar são essenciais para a sua conexão interior. Oferecemos produtos feitos com carinho, voltado para te fazer sentir único e especial.</h3>
            </div>
            <div id="interaction">
                <RouterLink to="/galeria">
                    <DefaultButtons label="GALERIA" />
                </RouterLink>
            </div> -->
        </section>
    </div>
</template>

<style scoped>

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding: 3em;
    }

    section #text {
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: center;
        align-items: center;
    }

</style>