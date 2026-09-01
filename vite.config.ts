import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Deployed to GitHub Pages under /stice-rivera/, so assets need that prefix.
// Local dev stays at the root.
const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/stice-rivera/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
