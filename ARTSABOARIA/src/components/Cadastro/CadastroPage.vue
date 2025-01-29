<script>
import './styles/CadastroPage.css';
import './styles/CadastroPageResponsive.css';

import { ref } from 'vue';
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router';
import { inject, toRef } from 'vue';

const menuAtivo = inject('menuAtivo');

export default {
    setup() {
        const nomeCadastro = ref('');
        const emailCadastro = ref('');
        const senhaCadastro = ref('');
        const confirmaSenhaCadastro = ref('');
        const menuAtivo = toRef(inject('menuAtivo'));
        const router = useRouter();

        // Função para enviar o formulário
        const enviarFormulario = async () => {
            if (senhaCadastro.value !== confirmaSenhaCadastro.value) {
                console.error('As senhas não coincidem');
                return;
            }

            try {
                console.log('Enviando dados...');
                console.log(nomeCadastro.value, emailCadastro.value, senhaCadastro.value);

                const payload = {
                    nome_Cliente: nomeCadastro.value,
                    email_Cliente: emailCadastro.value,
                    senha: senhaCadastro.value,
                };

                // Enviar para o backend
                const response = await axios.post('http://localhost:8080/cliente/salvar', payload);
                console.log('Dados enviados com sucesso', response);

                // Limpar campos após envio bem-sucedido
                nomeCadastro.value = '';
                emailCadastro.value = '';
                senhaCadastro.value = '';
                confirmaSenhaCadastro.value = '';
                router.push('/login');
            } catch (error) {
                console.error('Erro ao enviar os dados:', error);
            }
        };

        return {
            nomeCadastro,
            emailCadastro,
            senhaCadastro,
            confirmaSenhaCadastro,
            enviarFormulario,
            menuAtivo
            
        };
    }
};
</script>

<template>
    <transition name="fade" v-if="!menuAtivo">
        <div id="container_CadastroPage">
            <article id="article-CadastroPage"
                v-scroll-reveal="{ delay: 500, duration: 1000, distance: '1000px', opacity: 1 , origin: 'right' }">
                <form @submit.prevent="enviarFormulario" id="form-CadastroPage">
                    <div id="title-CadastroPage">
                        <h1>VAMOS COMEÇAR</h1>
                    </div>
                    <div id="form_container">
                        <div class="form_fields">
                            <input type="text" placeholder="Nome Completo" maxlength="100" v-model="nomeCadastro"
                                required>
                        </div>
                        <div class="form_fields">
                            <input type="email" placeholder="Email" maxlength="80" v-model="emailCadastro" required>
                        </div>
                        <div class="form_fields">
                            <input type="password" placeholder="Senha" maxlength="100" v-model="senhaCadastro" required>
                        </div>
                        <div class="form_fields">
                            <input type="password" placeholder="Confirma Senha" maxlength="100"
                                v-model="confirmaSenhaCadastro" required>
                        </div>
                    </div>
                    <div id="interactivity-LoginPage">
                        <button type="submit">Enviar</button>
                        <RouterLink to="/login">
                            <span>Já tenho uma Conta no site!</span>
                        </RouterLink>
                    </div>
                </form>
            </article>
            <aside id="aside_CadastroPage"
                v-scroll-reveal="{ delay: 200, duration: 1000, distance: '1000px', opacity: 1 , origin: 'left' }">
                <img src="../../assets/images/Wallpaper Login Icon.png" alt="" id="wallpaper-CadastroPage">
            </aside>
        </div>
    </transition>
</template>
