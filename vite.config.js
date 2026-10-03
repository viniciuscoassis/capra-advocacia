import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import { seoPlugin } from "./scripts/seo.mjs";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react(), seoPlugin(loadEnv(mode, process.cwd(), "VITE_").VITE_SITE_URL)],
  build: {
    rollupOptions: {
      input: {
        site: resolve(import.meta.dirname, "index.html"),
        privacidade: resolve(import.meta.dirname, "privacidade.html"),
      },
    },
  },
}));
