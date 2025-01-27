<template>
    <div v-if="isAuthenticated">
      <h1>Bem-vindo ao seu perfil</h1>
      <button @click="logout">LOGOUT</button>
    </div>
    <div v-else>
      <p>Você não está autenticado. Por favor, faça login para acessar o perfil.</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      // Verifica se o token de autenticação está no localStorage
      isAuthenticated() {
        return localStorage.getItem('authToken') !== null;
      },
    },
    methods: {
      logout() {
        // Remove o token do localStorage
        localStorage.removeItem('authToken');
  
        // Redireciona para a página de login
        this.$router.push('/login');
      }
    }
  };
  </script>
  