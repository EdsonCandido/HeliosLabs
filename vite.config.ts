import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ATENÇÃO:
// - Para GitHub Pages em subpath, defina base como: '/nome-do-repo/'
// - Para domínio próprio (ex: helioslabs.com.br) ou root do host, use base: '/'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
});

