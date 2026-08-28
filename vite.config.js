import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        site: resolve(import.meta.dirname, "index.html"),
        privacidade: resolve(import.meta.dirname, "privacidade.html"),
      },
    },
  },
});
