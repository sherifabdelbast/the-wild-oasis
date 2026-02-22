import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    // So @tanstack/react-query-devtools shows in dev (they check process.env.NODE_ENV)
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}))
