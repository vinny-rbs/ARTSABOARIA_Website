<script>

import './styles/CadastroPage.css';
import { inject, ref } from 'vue';
import axios from 'axios';


    //importação de variavel do Header
    const menuAtivo = inject('menuAtivo');


    //enviando para o banco
    const nomeCadastro = ref('');
    const emailCadastro = ref('');
    const senhaCadastro = ref('');
    const confirmaSenhaCadastro = ref('');
    console.log({nomeCadastro},emailCadastro,senhaCadastro,);
    console.log('teste')

    const enviarFormulario = async () => {
        console.log('teste')
        function limparCampos() {
            nomeCadastro.value = "";
            emailCadastro.value = "";
            senhaCadastro.value = "";
            confirmaSenhaCadastro.value = "";
        }

        try {
            const payload = {
                nome_Cliente: nomeCadastro.value,
                email_Cliente: emailCadastro.value,
                senha: senhaCadastro.value,
            };

            //enviando para o backend
            const response = await axios.post('http://localhost:8080/cliente/salvar', payload);
            limparCampos();
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }

    };

</script>

<template>

    <div id="container_CadastroPage">
        <div id="card_form_CadastroPage">
            <form @submit.prevent="enviarFormulario" id="forms">
                <h1>Registre a sua conta</h1>
                <div id="form_container">
                    <div class="form_fields">
                        <input type="text" placeholder="Nome Completo" maxlength="100" v-model="nomeCadastro" id="nome_cadastro" required>
                    </div>
                    <div class="form_fields">
                        <input type="email" placeholder="Email" maxlength="80" v-model="emailCadastro" id="email_cadastro" required>
                    </div>
                    <div class="form_fields">
                        <input type="text" placeholder="Senha" maxlength="100" v-model="senhaCadastro" id="senha_cadastro" required>
                    </div>
                    <div class="form_fields">
                        <input type="text" placeholder="Confirma Senha" maxlength="100" v-model="confirmaSenhaCadastro" id="condirmaSenha_cadastro" required>
                    </div>
                    <input type="submit" value="Enviar">
                </div>
            </form>
        </div>
    </div>

</template>