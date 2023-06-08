// import path from "path";
const path = require("path");
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { resolve } from "path";

const viteEnv = {};
Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    viteEnv[`import.meta.env.${key}`] = process.env[key];
  }
});

export default defineConfig({
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src"),
    },
  },
  define: viteEnv,
  plugins: [vue()],
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default {
//   alias: {
//     "@": require("path").resolve(__dirname, "src"),
//   },
//   define: viteEnv,
//   plugins: [vue()],
// };
