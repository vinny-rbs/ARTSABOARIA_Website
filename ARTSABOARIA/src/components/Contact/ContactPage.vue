<script setup lang="ts">
    import '../Contact/ContactStyle.css'
</script>

<template>
    <main>
        <article>
            <div id="title">
                <h1>Que tal conversar um pouco com a <span>gente</span>?</h1>
            </div>
            <div id="description">
                <p>Vamos criar algo novo juntos, fale sobre suas ideias e possíveis interesses sobre a empresa, e também que tal dar uma olhada na nossa aba de <span>Orientações</span>?</p>
            </div>
            <div id="interactivity_button">
                <button>
                    <div id="icon_email_field">
                        <i>icone de email</i>
                        <h3>artsaboaria2024@gmail.com</h3>
                    </div>
                </button>
            </div>
            <div id="contact_button">
                <i>whaatzap</i>
                <i>instagram</i>
                <i>facebook</i>
            </div>
        </article>
        <aside>
            <div id="card_form">
                <h1>Mande uma Mensagem</h1>
                <form action="">
                    <input type="text" placeholder="Nome Completo">
                    <input type="email" placeholder="Email">
                    <input type="text" placeholder="Título">
                    <textarea placeholder="Mensagem"></textarea>
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </aside>
    </main>
</template>