import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lab5_fw/',
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lab5_fw/', // ⚠️ Обязательно: имя твоего репозитория со слешами
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
