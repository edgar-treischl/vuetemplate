import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // For GitHub Pages deployment
  base: process.env.VITE_BASE_URL || '/vuetemplate/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
