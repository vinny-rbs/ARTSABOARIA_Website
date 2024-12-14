import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Galeria from '../views/Galeria.vue'
import Contato from '../views/Contato.vue'
import Orientacoes from '../views/Orientacoes.vue'
import Produto from '../views/Produto.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Galeria
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/orientacoes',
      name: 'Orientações',
      component: Orientacoes
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/product/:id',
      name: 'Produto',
      component: Produto,
      props: true,
    }
  ]
});

// Middleware de autenticação
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('userToken'); // Verifica token

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Se a rota requer autenticação e o usuário não está autenticado
    next({ name: 'Login' });
  } else {
    next(); // Permite acesso
  }
});

export default router
