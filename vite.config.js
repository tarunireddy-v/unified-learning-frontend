import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = (env.VITE_PROXY_TARGET || 'http://127.0.0.1:8000').replace(/\/$/, '')

  return {
    base: './',
    plugins: [react()],
    server: {
      // When VITE_API_URL is unset, the app calls /api/* from the same origin as Vite.
      // This avoids CORS and "failed to fetch" issues during local dev.
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '') || '/',
        },
      },
    },
  }
})