import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/lugar-na-historia/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
});
