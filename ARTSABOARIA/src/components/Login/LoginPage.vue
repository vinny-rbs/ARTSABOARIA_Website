<script>
import axios from 'axios';  // Importando axios para requisições HTTP
import { RouterLink } from 'vue-router';
import { inject, toRef } from 'vue';
import '../Login/styles/LoginPage.css';
import '../Login/styles/LoginPageResponsive.css';

const menuAtivo = inject('menuAtivo');


export default {
  setup() {
        // Torna o menuAtivo reativo ao usar inject
        const menuAtivo = toRef(inject('menuAtivo'));

        return {
            menuAtivo,
        };
    },
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
  <transition name="fade" v-if="!menuAtivo">
    <div class="container-LoginPage">
      <div class="card-LoginPage">
        <aside id="aside-LoginPage" v-scroll-reveal="{ delay: 200, duration: 1000, distance: '100%', opacity: 1 , origin: 'right' }">
          <img src="../../assets/images/Wallpaper Login Icon.png" alt="" id="wallpaper-LoginPage">
        </aside>
        <article id="article-LoginPage"
          v-scroll-reveal="{ delay: 500, duration: 1000, distance: '100%', opacity: 1 , origin: 'left' }">
          <form @submit="login" id="form-LoginPage">
            <div id="title-LoginPage">
              <h1>OLÁ DE NOVO</h1>
              <span>Faça login para acompanhar nossos produtos!</span>
            </div>
            <div id="control-LoginPage">
              <input type="email" placeholder="Email" v-model="email" required />
              <input type="password" placeholder="Senha" v-model="senha" required />
            </div>
            <div id="interactivity-LoginPage">
              <button type="submit">ENTRAR</button>
              <RouterLink to="/cadastro">
                <span>Não sou cadastrado no site!</span>
              </RouterLink>
            </div>
          </form>
        </article>
      </div>
    </div>
  </transition>
</template>
