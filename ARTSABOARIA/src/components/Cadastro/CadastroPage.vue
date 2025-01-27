<script>
import './styles/CadastroPage.css';
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const nomeCadastro = ref('');
    const emailCadastro = ref('');
    const senhaCadastro = ref('');
    const confirmaSenhaCadastro = ref('');

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
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return {
      nomeCadastro,
      emailCadastro,
      senhaCadastro,
      confirmaSenhaCadastro,
      enviarFormulario
    };
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
                        <input type="text" placeholder="Nome Completo" maxlength="100" v-model="nomeCadastro" required>
                    </div>
                    <div class="form_fields">
                        <input type="email" placeholder="Email" maxlength="80" v-model="emailCadastro" required>
                    </div>
                    <div class="form_fields">
                        <input type="password" placeholder="Senha" maxlength="100" v-model="senhaCadastro" required>
                    </div>
                    <div class="form_fields">
                        <input type="password" placeholder="Confirma Senha" maxlength="100" v-model="confirmaSenhaCadastro" required>
                    </div>
                    <input type="submit" value="Enviar">
                </div>
            </form>
        </div>
    </div>
</template>
