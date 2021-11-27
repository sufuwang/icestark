import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../iceApp/dist/reactApp',
    lib: {
      name: 'react-app',
      entry: './src/main.tsx',
      formats: ['umd']
    }
  }
})
