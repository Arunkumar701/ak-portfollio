import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      port: 3001,
      host: '0.0.0.0',
      headers: {
        // 'Content-Security-Policy': "default-src 'self'; script-src 'self' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'none';",
        'X-Frame-Options': 'deny',
        'Permissions-Policy':
          "camera=(), microphone=(), geolocation=(), payment=()"
      }
    },
    preview: {
      headers: {
        // 'Content-Security-Policy': "default-src 'self'; script-src 'self' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'none';",
        'X-Frame-Options': 'deny',
        'Permissions-Policy':
          "camera=(), microphone=(), geolocation=(), payment=()"
      }
    },
    base: './',
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
