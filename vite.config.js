import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative asset URLs so the build works on both GitHub Pages and branch preview deployments.
  base: './',
  plugins: [react()],
  assetsInclude:['**/*.glb']
})
