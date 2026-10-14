import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (!env.VITE_SITE_URL) {
    process.env.VITE_SITE_URL = 'https://narenerussell.com';
  }

  return {
    plugins: [react()],
    // react-icons' ESM build can't be loaded by Node directly, so bundle it into the prerender build
    ssr: { noExternal: ['react-icons'] },
  };
});
