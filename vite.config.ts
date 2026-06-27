import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  build: {
    outDir: "public",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: "src/client/main.ts",
      },
      output: {
        assetFileNames: "styles/[name][extname]",
        entryFileNames: "scripts/[name].js",
        chunkFileNames: "scripts/[name].js",
      },
    },
  },
});
