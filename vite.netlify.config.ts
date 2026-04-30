// Standalone Vite config used ONLY for the Netlify static-SPA build.
// Run with: npm run build:netlify  (=  vite build --config vite.netlify.config.ts)
//
// This config intentionally avoids @lovable.dev/vite-tanstack-config because
// that preset forces a Cloudflare Workers SSR build, which cannot be served
// as static files on Netlify. Here we produce a plain Vite SPA in /dist.
//
// The HTML entry lives at /netlify/index.html (NOT the project root) so it
// does not collide with the TanStack Start dev server, which would otherwise
// serve that file instead of the SSR root route and break the Lovable preview.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

const projectRoot = __dirname;

export default defineConfig({
  // Use /netlify as the Vite root so index.html lives there.
  root: path.resolve(projectRoot, "netlify"),
  // Static assets still come from /public at the project root.
  publicDir: path.resolve(projectRoot, "public"),
  plugins: [
    // Generates routeTree.gen.ts from src/routes/* (same as the SSR build).
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: path.resolve(projectRoot, "src/routes"),
      generatedRouteTree: path.resolve(projectRoot, "src/routeTree.gen.ts"),
    }),
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: [path.resolve(projectRoot, "tsconfig.json")] }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "src"),
    },
  },
  build: {
    // Output to <projectRoot>/dist regardless of root.
    outDir: path.resolve(projectRoot, "dist"),
    emptyOutDir: true,
    sourcemap: false,
  },
});
