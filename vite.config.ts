import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base so the build works when deployed at a sub-path
// (e.g. GitHub Pages project sites). Vercel/Netlify serve from root and
// relative paths work there too.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    sourcemap: false,
  },
})
