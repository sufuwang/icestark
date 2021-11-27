import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../iceApp/dist/vueApp',
    lib: {
      name: 'vue-app',
      entry: './src/main.ts',
      formats: ['umd']
    }
  }
})
