import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createScrollRevealDirective } from 'vue-scroll-reveal';

const app = createApp(App)

app.use(router)

app.mount('#app')

// Criar a diretiva globalmente
const vScrollReveal = createScrollRevealDirective({
  delay: 1000,
  duration: 150,
});

app.directive('scroll-reveal', vScrollReveal);

