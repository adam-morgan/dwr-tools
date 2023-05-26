/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        commonjsOptions: {
            include: [/@dwr-tools/, /node_modules/]
        }
    },
    optimizeDeps: {
        // include: ['@dwr-tools/common']
    },
    plugins: [react()],
    server: {
        port: 3003,
        proxy: {
            '/api': {
                target: 'http://localhost:3004',
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
