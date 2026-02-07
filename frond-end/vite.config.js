import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/assets', // Agar assets ni alias sifatida belgilamoqchi bo'lsangiz
    },
  },
});