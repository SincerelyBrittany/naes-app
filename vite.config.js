import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Ensure HTML %VITE_SITE_URL% has a fallback during build
  if (!env.VITE_SITE_URL) {
    process.env.VITE_SITE_URL = 'https://narenerussell.com';
  }

  return {
    plugins: [react()],
  };
});
