import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Galeria from '../views/Galeria.vue'
import Contato from '../views/Contato.vue'
import Orientacoes from '../views/Orientacoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
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
    }
  ]
})

export default router
