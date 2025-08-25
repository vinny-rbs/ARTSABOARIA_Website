import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: import('../views/Inicio.vue'),
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: import('../views/Galeria.vue')
    },
    {
      path: '/contato',
      name: 'Contato',
      component: import('../views/Contato.vue')
    },
    {
      path: '/orientacoes',
      name: 'Orientações',
      component: import('../views/Orientacoes.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: import('../views/Perfil.vue'),
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('authToken');
        
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: import('../views/Login.vue'),
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: import('../views/Cadastro.vue'),
    },
    {
      path: '/product/:id_Produto',
      name: 'Produto',
      component: import('../views/Produto.vue'),
      props: true,
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = localStorage.getItem('token');
    
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router
