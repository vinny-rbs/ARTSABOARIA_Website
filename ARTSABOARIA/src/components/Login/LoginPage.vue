<!--<script>

import '../Login/styles/Login.css';



</script>


-->

<script>
import { RouterLink, RouterView } from 'vue-router';
import '../Login/styles/Login.css';

export default {
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    login(event) {
      event.preventDefault(); // Impede o envio do formulário tradicional

      // Verificando se as credenciais são 'admin@gmail.com' e 'admin'
      if (this.email === 'admin@gmail.com' && this.senha === 'admin') {
        this.$router.push('/galeria');  // Redireciona para a página de galeria
      } else {
        alert('Credenciais inválidas!');  // Alerta caso as credenciais estejam erradas
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
                    <input type="email" placeholder="Email" v-model="email" required>
                    <input type="password" placeholder="senha" v-model="senha" required>
                    <RouterLink to="/cadastro">
                            <span>Não possuí uma conta ainda?</span>
                    </RouterLink>
                    <button type="submit">ENTRAR</button>
                </form>
            </article>
        </div>
    </div>
</template>
