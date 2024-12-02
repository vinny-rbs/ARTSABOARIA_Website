import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    // Configuração para redirecionar rotas no modo SPA
    fs: { strict: false }, // Permite acesso a arquivos fora do diretório root em alguns casos
  },
  build: {
    outDir: 'dist', // Diretório de saída do build
  },
});