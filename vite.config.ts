import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'features': path.resolve(__dirname, 'src/features'),
      'store': path.resolve(__dirname, 'src/store'),

      "@base-component": path.resolve(__dirname, 'src/base-component')

    }
  }
})
