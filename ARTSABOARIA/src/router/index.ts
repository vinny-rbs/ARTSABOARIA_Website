import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Galeria from '../views/Galeria.vue'
import Contato from '../views/Contato.vue'
import Orientacoes from '../views/Orientacoes.vue'
import Produto from '../views/Produto.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'

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
      name: 'perfil',
      component: Perfil,
      beforeEnter: (to, from, next) => {
        // Verifica se o token de autenticação está presente no localStorage
        const token = localStorage.getItem('authToken');
        
        if (token) {
          next(); // Permite o acesso se o token estiver presente
        } else {
          next('/login'); // Redireciona para o login se não houver token
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
    },
    {
      path: '/product/:id_Produto',
      name: 'Produto',
      component: Produto,
      props: true,
    }
  ]
});

// Guarda de navegação global
router.beforeEach((to, from, next) => {
  // Verifica se a rota requer autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica se o usuário está logado (exemplo usando localStorage)
    const isAuthenticated = localStorage.getItem('token');
    
    if (!isAuthenticated) {
      // Se não estiver logado, redireciona para a página de login
      next({ name: 'Login' });
    } else {
      // Se estiver logado, continua a navegação
      next();
    }
  } else {
    // Se não requer autenticação, continua normalmente
    next();
  }
});


export default router
