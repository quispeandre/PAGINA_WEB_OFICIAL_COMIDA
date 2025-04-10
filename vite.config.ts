import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Netlify busca esta carpeta por defecto
    emptyOutDir: true,
  },
  base: '/',  // Crucial para rutas en producción
});