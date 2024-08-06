import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/website-portfolio/', // replace with your repository name
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
