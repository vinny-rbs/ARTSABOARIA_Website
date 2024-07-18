import { createRouter, createWebHistory } from 'vue-router'
import Laddingpage from '../views/Laddingpage.vue'
import Gallery from '../views/Gallery.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Laddingpage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Gallery
    }
  ]
})

export default router
