import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  base: mode === 'production' ? '/greta_corporate_portfolio/' : '/',
}))
