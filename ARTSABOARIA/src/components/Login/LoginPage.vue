<script>
import axios from 'axios';  // Importando axios para requisições HTTP
import { RouterLink } from 'vue-router';
import '../Login/styles/Login.css';

export default {
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    async login(event) {
      event.preventDefault(); // Impede o envio do formulário tradicional

      try {
        // Fazendo uma requisição POST para validar o login no backend
        const response = await axios.post('http://localhost:8080/cliente/login', {
          email_Cliente: this.email,
          senha: this.senha
        });

        // Verificando se o login foi bem-sucedido
        if (response.data) {
          // Supondo que a resposta contenha um token de autenticação
          const token = response.data.token;

          // Armazenando o token no localStorage
          localStorage.setItem('authToken', token);
          // Se o login for bem-sucedido, redireciona para a página de galeria
          this.$router.push('/perfil');
        }
      } catch (error) {
        // Caso o login falhe, exibe um alerta
        alert('Credenciais inválidas ou erro na requisição!');
      }
    }
  }
};
</script>

<template>
  <div class="container-LoginPage">
    <div class="card-LoginPage">
      <aside id="aside-LoginPage">
        <h1>Bem-vindo de volta!</h1>
        <p>De volta para o site</p>
      </aside>
      <article id="article-LoginPage">
        <h1>Faça o Login</h1>
        <form @submit="login" id="form-LoginPage">
          <input type="email" placeholder="Email" v-model="email" required />
          <input type="password" placeholder="Senha" v-model="senha" required />
          <RouterLink to="/cadastro">
            <span>Não possui uma conta ainda?</span>
          </RouterLink>
          <button type="submit">ENTRAR</button>
        </form>
      </article>
    </div>
  </div>
</template>
