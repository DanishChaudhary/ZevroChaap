import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file from root directory
  const env = loadEnv(mode, path.resolve(__dirname, '..'), '')
  
  return {
    plugins: [react()],
    envDir: path.resolve(__dirname, '..'), // Look for .env files in root directory
    base: '/', // Ensure correct base path for production
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // Ensure assets are properly handled
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const extType = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
    define: {
      // Expose VITE_ prefixed variables from root .env
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL),
      'import.meta.env.VITE_SITE_BASE_URL': JSON.stringify(env.VITE_SITE_BASE_URL),
      'import.meta.env.VITE_CLIENT_ORIGIN': JSON.stringify(env.VITE_CLIENT_ORIGIN),
    }
  }
})
