import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://real-estate-website-server-blue.vercel.app',
        secure: true,
        changeOrigin: true, // Add this if you need to change the origin
      },
    },
  },
  plugins: [react()],
});
