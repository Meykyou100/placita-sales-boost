// Standalone Vite config used ONLY for the Netlify static-SPA build.
// Run with: npm run build:netlify  (=  vite build --config vite.netlify.config.ts)
//
// This config intentionally avoids @lovable.dev/vite-tanstack-config because
// that preset forces a Cloudflare Workers SSR build, which cannot be served
// as static files on Netlify. Here we produce a plain Vite SPA in /dist.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    // Generates routeTree.gen.ts from src/routes/* (same as the SSR build).
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
